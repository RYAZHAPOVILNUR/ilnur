import { CommentInterface } from "./comment.interface";

export interface TodoInterface {
  id: string;
  title: string;
  description: string;
  priority: string,
  comments: CommentInterface[],
  reporterId: number,
  assigneesId: number,
  created: Date,
  updated: Date,
}
