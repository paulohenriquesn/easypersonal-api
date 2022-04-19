import { Class } from '@entities/Class';
import { Modality } from '@entities/Modality';
import { MuscularGroup } from '@entities/MuscularGroup';
import { User } from '@entities/User';
import { UserSubscriptions } from '@entities/UserSubscription';
import { WorkoutTime } from '@entities/WorkoutTime';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ClassesModule } from './classes/classes.module';
import { ModalitiesModule } from './modalities/modality.module';
import { UserModule } from './users/user.module';
import { WorkoutsModule } from './workouts/workouts.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: process.env.DB_URL,
        entities: [
          User,
          UserSubscriptions,
          Modality,
          Class,
          MuscularGroup,
          WorkoutTime,
        ],
        synchronize: false,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
    AuthModule,
    UserModule,
    ClassesModule,
    ModalitiesModule,
    WorkoutsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
