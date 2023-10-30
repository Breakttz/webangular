import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  mail: String;

  @Prop()
  rut: string;

}

export const UserSchema = SchemaFactory.createForClass(User);