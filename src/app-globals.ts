import { INestApplication, ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { LAMBDA_STAGING } from "env";
import { HttpExceptionFilter } from "./http-exception.filter";
import { TransformInterceptor } from "./transform.interceptor";

export function setupSwagger(nestApp: INestApplication, isServerless = false) {
    let config: any = new DocumentBuilder()
        .setTitle('Sakura WebStore')
        .setDescription('The Sakura WebStore Backend APIs are described below')
        .setVersion('1.0')
        .addTag('sakura');
    if (isServerless) {
        const staging = LAMBDA_STAGING;
        config = config
            .addServer(`/${staging}`)
            .build();
    } else {
        config = config
            .build();
    }

    const document = SwaggerModule.createDocument(nestApp, config);
    SwaggerModule.setup('api', nestApp, document);
}


export function setupAppPipeline(nestApp: INestApplication) {
    nestApp.setGlobalPrefix("v1");

    nestApp.enableCors();
    nestApp.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );
    nestApp.useGlobalFilters(new HttpExceptionFilter());
    nestApp.useGlobalInterceptors(new TransformInterceptor());
}