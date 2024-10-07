import { JobTaskStatus as JobTaskStatus_1 } from 'payload'

/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    posts: Post;
    simple: Simple;
    users: User;
    'payload-jobs': PayloadJob;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs?: {
    tasks: {
      UpdatePost: {
        input: TaskUpdatePostInput;
        output: TaskUpdatePostOutput;
      };
      UpdatePostStep2: {
        input: TaskUpdatePostStep2Input;
      };
      CreateSimple: {
        input: TaskCreateSimpleInput;
        output: TaskCreateSimpleOutput;
      };
      CreateSimpleWithDuplicateMessage: {
        input: TaskCreateSimpleWithDuplicateMessageInput;
        output: TaskCreateSimpleWithDuplicateMessageOutput;
      };
      ExternalTask: {
        input: TaskExternalTaskInput;
        output: TaskExternalTaskOutput;
      };
    };
    workflows?: {
      updatePost?: {
        input: WorkflowupdatePostInput;
      };
      retriesTest?: {
        input: WorkflowretriesTestInput;
      };
      retriesRollbackTest?: {
        input: WorkflowretriesRollbackTestInput;
      };
      retriesWorkflowLevelTest?: {
        input: WorkflowretriesWorkflowLevelTestInput;
      };
      inlineTaskTest?: {
        input: WorkflowinlineTaskTestInput;
      };
      externalWorkflow?: {
        input: WorkflowexternalWorkflowInput;
      };
      retriesBackoffTest?: {
        input: WorkflowretriesBackoffTestInput;
      };
    };
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  title: string;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  jobStep1Ran?: string | null;
  jobStep2Ran?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "simple".
 */
export interface Simple {
  id: string;
  title: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-jobs".
 */
export interface PayloadJob {
  id: string;
  input?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  taskStatus?: {
    UpdatePost?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.*$".
       */
      [k: string]: JobTaskStatus_1<"UpdatePost">;
    };
    UpdatePostStep2?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.*$".
       */
      [k: string]: JobTaskStatus_1<"UpdatePostStep2">;
    };
    CreateSimple?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.*$".
       */
      [k: string]: JobTaskStatus_1<"CreateSimple">;
    };
    CreateSimpleWithDuplicateMessage?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.*$".
       */
      [k: string]: JobTaskStatus_1<"CreateSimpleWithDuplicateMessage">;
    };
    ExternalTask?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.*$".
       */
      [k: string]: JobTaskStatus_1<"ExternalTask">;
    };
    inline?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.*$".
       */
      [k: string]: JobTaskStatus_1<any>;
    };
  };
  completedAt?: string | null;
  totalTried?: number | null;
  hasError?: boolean | null;
  error?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  log?:
    | {
        executedAt: string;
        completedAt: string;
        taskSlug:
          | 'inline'
          | 'UpdatePost'
          | 'UpdatePostStep2'
          | 'CreateSimple'
          | 'CreateSimpleWithDuplicateMessage'
          | 'ExternalTask';
        taskID: string;
        input?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        output?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        state: 'failed' | 'succeeded';
        error?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        id?: string | null;
      }[]
    | null;
  workflowSlug?:
    | (
        | 'updatePost'
        | 'retriesTest'
        | 'retriesRollbackTest'
        | 'retriesWorkflowLevelTest'
        | 'inlineTaskTest'
        | 'externalWorkflow'
        | 'retriesBackoffTest'
      )
    | null;
  taskSlug?:
    | (
        | 'inline'
        | 'UpdatePost'
        | 'UpdatePostStep2'
        | 'CreateSimple'
        | 'CreateSimpleWithDuplicateMessage'
        | 'ExternalTask'
      )
    | null;
  queue?: 'default' | null;
  waitUntil?: string | null;
  processing?: boolean | null;
  seenByWorker?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'posts';
        value: string | Post;
      } | null)
    | ({
        relationTo: 'simple';
        value: string | Simple;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'payload-jobs';
        value: string | PayloadJob;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskUpdatePostInput".
 */
export interface TaskUpdatePostInput {
  post: string | Post;
  message: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskUpdatePostOutput".
 */
export interface TaskUpdatePostOutput {
  messageTwice: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskUpdatePostStep2Input".
 */
export interface TaskUpdatePostStep2Input {
  post: string | Post;
  messageTwice: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskCreateSimpleInput".
 */
export interface TaskCreateSimpleInput {
  message: string;
  shouldFail?: boolean | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskCreateSimpleOutput".
 */
export interface TaskCreateSimpleOutput {
  simpleID: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskCreateSimpleWithDuplicateMessageInput".
 */
export interface TaskCreateSimpleWithDuplicateMessageInput {
  message: string;
  shouldFail?: boolean | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskCreateSimpleWithDuplicateMessageOutput".
 */
export interface TaskCreateSimpleWithDuplicateMessageOutput {
  simpleID: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskExternalTaskInput".
 */
export interface TaskExternalTaskInput {
  message: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskExternalTaskOutput".
 */
export interface TaskExternalTaskOutput {
  simpleID: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "WorkflowupdatePostInput".
 */
export interface WorkflowupdatePostInput {
  post: string | Post;
  message: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "WorkflowretriesTestInput".
 */
export interface WorkflowretriesTestInput {
  message: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "WorkflowretriesRollbackTestInput".
 */
export interface WorkflowretriesRollbackTestInput {
  message: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "WorkflowretriesWorkflowLevelTestInput".
 */
export interface WorkflowretriesWorkflowLevelTestInput {
  message: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "WorkflowinlineTaskTestInput".
 */
export interface WorkflowinlineTaskTestInput {
  message: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "WorkflowexternalWorkflowInput".
 */
export interface WorkflowexternalWorkflowInput {
  message: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "WorkflowretriesBackoffTestInput".
 */
export interface WorkflowretriesBackoffTestInput {
  message: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  // @ts-ignore 
  export interface GeneratedTypes extends Config {}
}