import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { OrderController } from "../order.controller";
import { OrderService } from "../order.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  advancePayment: 42.42,
  createdAt: new Date(),
  dueDate: new Date(),
  fulfillmentDate: new Date(),
  id: "exampleId",
  orderDate: new Date(),
  orderNumber: "exampleOrderNumber",
  paidAmount: 42.42,
  totalAmount: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  advancePayment: 42.42,
  createdAt: new Date(),
  dueDate: new Date(),
  fulfillmentDate: new Date(),
  id: "exampleId",
  orderDate: new Date(),
  orderNumber: "exampleOrderNumber",
  paidAmount: 42.42,
  totalAmount: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    advancePayment: 42.42,
    createdAt: new Date(),
    dueDate: new Date(),
    fulfillmentDate: new Date(),
    id: "exampleId",
    orderDate: new Date(),
    orderNumber: "exampleOrderNumber",
    paidAmount: 42.42,
    totalAmount: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  advancePayment: 42.42,
  createdAt: new Date(),
  dueDate: new Date(),
  fulfillmentDate: new Date(),
  id: "exampleId",
  orderDate: new Date(),
  orderNumber: "exampleOrderNumber",
  paidAmount: 42.42,
  totalAmount: 42.42,
  updatedAt: new Date(),
};

const service = {
  createOrder() {
    return CREATE_RESULT;
  },
  orders: () => FIND_MANY_RESULT,
  order: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Order", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OrderService,
          useValue: service,
        },
      ],
      controllers: [OrderController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /orders", async () => {
    await request(app.getHttpServer())
      .post("/orders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        fulfillmentDate: CREATE_RESULT.fulfillmentDate.toISOString(),
        orderDate: CREATE_RESULT.orderDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /orders", async () => {
    await request(app.getHttpServer())
      .get("/orders")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dueDate: FIND_MANY_RESULT[0].dueDate.toISOString(),
          fulfillmentDate: FIND_MANY_RESULT[0].fulfillmentDate.toISOString(),
          orderDate: FIND_MANY_RESULT[0].orderDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /orders/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/orders"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /orders/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/orders"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dueDate: FIND_ONE_RESULT.dueDate.toISOString(),
        fulfillmentDate: FIND_ONE_RESULT.fulfillmentDate.toISOString(),
        orderDate: FIND_ONE_RESULT.orderDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /orders existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/orders")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dueDate: CREATE_RESULT.dueDate.toISOString(),
        fulfillmentDate: CREATE_RESULT.fulfillmentDate.toISOString(),
        orderDate: CREATE_RESULT.orderDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/orders")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
