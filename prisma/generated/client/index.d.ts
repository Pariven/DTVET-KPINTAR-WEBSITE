
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model course_enrollments
 * 
 */
export type course_enrollments = $Result.DefaultSelection<Prisma.$course_enrollmentsPayload>
/**
 * Model achievements
 * 
 */
export type achievements = $Result.DefaultSelection<Prisma.$achievementsPayload>
/**
 * Model user_progress
 * 
 */
export type user_progress = $Result.DefaultSelection<Prisma.$user_progressPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PaymentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CartItems
 * const cartItems = await prisma.cartItem.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CartItems
   * const cartItems = await prisma.cartItem.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course_enrollments`: Exposes CRUD operations for the **course_enrollments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Course_enrollments
    * const course_enrollments = await prisma.course_enrollments.findMany()
    * ```
    */
  get course_enrollments(): Prisma.course_enrollmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.achievements`: Exposes CRUD operations for the **achievements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievements.findMany()
    * ```
    */
  get achievements(): Prisma.achievementsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_progress`: Exposes CRUD operations for the **user_progress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_progresses
    * const user_progresses = await prisma.user_progress.findMany()
    * ```
    */
  get user_progress(): Prisma.user_progressDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CartItem: 'CartItem',
    Payment: 'Payment',
    User: 'User',
    course_enrollments: 'course_enrollments',
    achievements: 'achievements',
    user_progress: 'user_progress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cartItem" | "payment" | "user" | "course_enrollments" | "achievements" | "user_progress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      course_enrollments: {
        payload: Prisma.$course_enrollmentsPayload<ExtArgs>
        fields: Prisma.course_enrollmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.course_enrollmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_enrollmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.course_enrollmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_enrollmentsPayload>
          }
          findFirst: {
            args: Prisma.course_enrollmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_enrollmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.course_enrollmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_enrollmentsPayload>
          }
          findMany: {
            args: Prisma.course_enrollmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_enrollmentsPayload>[]
          }
          create: {
            args: Prisma.course_enrollmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_enrollmentsPayload>
          }
          createMany: {
            args: Prisma.course_enrollmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.course_enrollmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_enrollmentsPayload>[]
          }
          delete: {
            args: Prisma.course_enrollmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_enrollmentsPayload>
          }
          update: {
            args: Prisma.course_enrollmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_enrollmentsPayload>
          }
          deleteMany: {
            args: Prisma.course_enrollmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.course_enrollmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.course_enrollmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_enrollmentsPayload>[]
          }
          upsert: {
            args: Prisma.course_enrollmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_enrollmentsPayload>
          }
          aggregate: {
            args: Prisma.Course_enrollmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse_enrollments>
          }
          groupBy: {
            args: Prisma.course_enrollmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Course_enrollmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.course_enrollmentsCountArgs<ExtArgs>
            result: $Utils.Optional<Course_enrollmentsCountAggregateOutputType> | number
          }
        }
      }
      achievements: {
        payload: Prisma.$achievementsPayload<ExtArgs>
        fields: Prisma.achievementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.achievementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.achievementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          findFirst: {
            args: Prisma.achievementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.achievementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          findMany: {
            args: Prisma.achievementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>[]
          }
          create: {
            args: Prisma.achievementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          createMany: {
            args: Prisma.achievementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.achievementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>[]
          }
          delete: {
            args: Prisma.achievementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          update: {
            args: Prisma.achievementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          deleteMany: {
            args: Prisma.achievementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.achievementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.achievementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>[]
          }
          upsert: {
            args: Prisma.achievementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$achievementsPayload>
          }
          aggregate: {
            args: Prisma.AchievementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievements>
          }
          groupBy: {
            args: Prisma.achievementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.achievementsCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementsCountAggregateOutputType> | number
          }
        }
      }
      user_progress: {
        payload: Prisma.$user_progressPayload<ExtArgs>
        fields: Prisma.user_progressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_progressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_progressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_progressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_progressPayload>
          }
          findFirst: {
            args: Prisma.user_progressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_progressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_progressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_progressPayload>
          }
          findMany: {
            args: Prisma.user_progressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_progressPayload>[]
          }
          create: {
            args: Prisma.user_progressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_progressPayload>
          }
          createMany: {
            args: Prisma.user_progressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_progressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_progressPayload>[]
          }
          delete: {
            args: Prisma.user_progressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_progressPayload>
          }
          update: {
            args: Prisma.user_progressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_progressPayload>
          }
          deleteMany: {
            args: Prisma.user_progressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_progressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_progressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_progressPayload>[]
          }
          upsert: {
            args: Prisma.user_progressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_progressPayload>
          }
          aggregate: {
            args: Prisma.User_progressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_progress>
          }
          groupBy: {
            args: Prisma.user_progressGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_progressGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_progressCountArgs<ExtArgs>
            result: $Utils.Optional<User_progressCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cartItem?: CartItemOmit
    payment?: PaymentOmit
    user?: UserOmit
    course_enrollments?: course_enrollmentsOmit
    achievements?: achievementsOmit
    user_progress?: user_progressOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    course_enrollments: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course_enrollments?: boolean | PaymentCountOutputTypeCountCourse_enrollmentsArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountCourse_enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_enrollmentsWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    CartItem: number
    Payment: number
    achievements: number
    course_enrollments: number
    user_progress: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CartItem?: boolean | UserCountOutputTypeCountCartItemArgs
    Payment?: boolean | UserCountOutputTypeCountPaymentArgs
    achievements?: boolean | UserCountOutputTypeCountAchievementsArgs
    course_enrollments?: boolean | UserCountOutputTypeCountCourse_enrollmentsArgs
    user_progress?: boolean | UserCountOutputTypeCountUser_progressArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAchievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: achievementsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourse_enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_enrollmentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_progressWhereInput
  }


  /**
   * Count Type Course_enrollmentsCountOutputType
   */

  export type Course_enrollmentsCountOutputType = {
    user_progress: number
  }

  export type Course_enrollmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_progress?: boolean | Course_enrollmentsCountOutputTypeCountUser_progressArgs
  }

  // Custom InputTypes
  /**
   * Course_enrollmentsCountOutputType without action
   */
  export type Course_enrollmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_enrollmentsCountOutputType
     */
    select?: Course_enrollmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Course_enrollmentsCountOutputType without action
   */
  export type Course_enrollmentsCountOutputTypeCountUser_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_progressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    price: number | null
  }

  export type CartItemSumAggregateOutputType = {
    price: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: string | null
    userId: string | null
    certificationId: string | null
    certificationName: string | null
    price: number | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    provider: string | null
    category: string | null
    examCode: string | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    certificationId: string | null
    certificationName: string | null
    price: number | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    provider: string | null
    category: string | null
    examCode: string | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    userId: number
    certificationId: number
    certificationName: number
    price: number
    logoUrl: number
    createdAt: number
    updatedAt: number
    provider: number
    category: number
    examCode: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    price?: true
  }

  export type CartItemSumAggregateInputType = {
    price?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    userId?: true
    certificationId?: true
    certificationName?: true
    price?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    category?: true
    examCode?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    userId?: true
    certificationId?: true
    certificationName?: true
    price?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    category?: true
    examCode?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    userId?: true
    certificationId?: true
    certificationName?: true
    price?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
    provider?: true
    category?: true
    examCode?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: string
    userId: string
    certificationId: string
    certificationName: string
    price: number
    logoUrl: string | null
    createdAt: Date
    updatedAt: Date
    provider: string | null
    category: string | null
    examCode: string | null
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    certificationId?: boolean
    certificationName?: boolean
    price?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    category?: boolean
    examCode?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    certificationId?: boolean
    certificationName?: boolean
    price?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    category?: boolean
    examCode?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    certificationId?: boolean
    certificationName?: boolean
    price?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    category?: boolean
    examCode?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    id?: boolean
    userId?: boolean
    certificationId?: boolean
    certificationName?: boolean
    price?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean
    category?: boolean
    examCode?: boolean
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "certificationId" | "certificationName" | "price" | "logoUrl" | "createdAt" | "updatedAt" | "provider" | "category" | "examCode", ExtArgs["result"]["cartItem"]>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      certificationId: string
      certificationName: string
      price: number
      logoUrl: string | null
      createdAt: Date
      updatedAt: Date
      provider: string | null
      category: string | null
      examCode: string | null
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'String'>
    readonly userId: FieldRef<"CartItem", 'String'>
    readonly certificationId: FieldRef<"CartItem", 'String'>
    readonly certificationName: FieldRef<"CartItem", 'String'>
    readonly price: FieldRef<"CartItem", 'Float'>
    readonly logoUrl: FieldRef<"CartItem", 'String'>
    readonly createdAt: FieldRef<"CartItem", 'DateTime'>
    readonly updatedAt: FieldRef<"CartItem", 'DateTime'>
    readonly provider: FieldRef<"CartItem", 'String'>
    readonly category: FieldRef<"CartItem", 'String'>
    readonly examCode: FieldRef<"CartItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem createManyAndReturn
   */
  export type CartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItem updateManyAndReturn
   */
  export type CartItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
    coursesCount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
    coursesCount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeSessionId: string | null
    stripePaymentId: string | null
    amount: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    receiptNumber: string | null
    paymentMethod: string | null
    coursesCount: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stripeSessionId: string | null
    stripePaymentId: string | null
    amount: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    receiptNumber: string | null
    paymentMethod: string | null
    coursesCount: number | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    stripeSessionId: number
    stripePaymentId: number
    amount: number
    currency: number
    status: number
    items: number
    createdAt: number
    updatedAt: number
    receiptNumber: number
    paymentMethod: number
    coursesCount: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
    coursesCount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
    coursesCount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    stripeSessionId?: true
    stripePaymentId?: true
    amount?: true
    currency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    receiptNumber?: true
    paymentMethod?: true
    coursesCount?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    stripeSessionId?: true
    stripePaymentId?: true
    amount?: true
    currency?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    receiptNumber?: true
    paymentMethod?: true
    coursesCount?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    stripeSessionId?: true
    stripePaymentId?: true
    amount?: true
    currency?: true
    status?: true
    items?: true
    createdAt?: true
    updatedAt?: true
    receiptNumber?: true
    paymentMethod?: true
    coursesCount?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    stripeSessionId: string
    stripePaymentId: string | null
    amount: number
    currency: string
    status: $Enums.PaymentStatus
    items: JsonValue
    createdAt: Date
    updatedAt: Date
    receiptNumber: string | null
    paymentMethod: string | null
    coursesCount: number | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeSessionId?: boolean
    stripePaymentId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    items?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiptNumber?: boolean
    paymentMethod?: boolean
    coursesCount?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    course_enrollments?: boolean | Payment$course_enrollmentsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeSessionId?: boolean
    stripePaymentId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    items?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiptNumber?: boolean
    paymentMethod?: boolean
    coursesCount?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stripeSessionId?: boolean
    stripePaymentId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    items?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiptNumber?: boolean
    paymentMethod?: boolean
    coursesCount?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    stripeSessionId?: boolean
    stripePaymentId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    items?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    receiptNumber?: boolean
    paymentMethod?: boolean
    coursesCount?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stripeSessionId" | "stripePaymentId" | "amount" | "currency" | "status" | "items" | "createdAt" | "updatedAt" | "receiptNumber" | "paymentMethod" | "coursesCount", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    course_enrollments?: boolean | Payment$course_enrollmentsArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      course_enrollments: Prisma.$course_enrollmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stripeSessionId: string
      stripePaymentId: string | null
      amount: number
      currency: string
      status: $Enums.PaymentStatus
      items: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
      receiptNumber: string | null
      paymentMethod: string | null
      coursesCount: number | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course_enrollments<T extends Payment$course_enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Payment$course_enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_enrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly stripeSessionId: FieldRef<"Payment", 'String'>
    readonly stripePaymentId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly items: FieldRef<"Payment", 'Json'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly receiptNumber: FieldRef<"Payment", 'String'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
    readonly coursesCount: FieldRef<"Payment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.course_enrollments
   */
  export type Payment$course_enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_enrollments
     */
    select?: course_enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_enrollments
     */
    omit?: course_enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_enrollmentsInclude<ExtArgs> | null
    where?: course_enrollmentsWhereInput
    orderBy?: course_enrollmentsOrderByWithRelationInput | course_enrollmentsOrderByWithRelationInput[]
    cursor?: course_enrollmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_enrollmentsScalarFieldEnum | Course_enrollmentsScalarFieldEnum[]
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    totalspent: number | null
    coursesowned: number | null
    totalSpent: number | null
    coursesOwned: number | null
  }

  export type UserSumAggregateOutputType = {
    totalspent: number | null
    coursesowned: number | null
    totalSpent: number | null
    coursesOwned: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    phone: string | null
    language: string | null
    country: string | null
    occupation: string | null
    totalspent: number | null
    coursesowned: number | null
    profileImage: string | null
    city: string | null
    company: string | null
    linkedIn: string | null
    bio: string | null
    lastLoginAt: Date | null
    totalSpent: number | null
    coursesOwned: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.Role | null
    phone: string | null
    language: string | null
    country: string | null
    occupation: string | null
    totalspent: number | null
    coursesowned: number | null
    profileImage: string | null
    city: string | null
    company: string | null
    linkedIn: string | null
    bio: string | null
    lastLoginAt: Date | null
    totalSpent: number | null
    coursesOwned: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    role: number
    phone: number
    language: number
    country: number
    occupation: number
    totalspent: number
    coursesowned: number
    profileImage: number
    city: number
    company: number
    linkedIn: number
    bio: number
    lastLoginAt: number
    totalSpent: number
    coursesOwned: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    totalspent?: true
    coursesowned?: true
    totalSpent?: true
    coursesOwned?: true
  }

  export type UserSumAggregateInputType = {
    totalspent?: true
    coursesowned?: true
    totalSpent?: true
    coursesOwned?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    phone?: true
    language?: true
    country?: true
    occupation?: true
    totalspent?: true
    coursesowned?: true
    profileImage?: true
    city?: true
    company?: true
    linkedIn?: true
    bio?: true
    lastLoginAt?: true
    totalSpent?: true
    coursesOwned?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    phone?: true
    language?: true
    country?: true
    occupation?: true
    totalspent?: true
    coursesowned?: true
    profileImage?: true
    city?: true
    company?: true
    linkedIn?: true
    bio?: true
    lastLoginAt?: true
    totalSpent?: true
    coursesOwned?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    phone?: true
    language?: true
    country?: true
    occupation?: true
    totalspent?: true
    coursesowned?: true
    profileImage?: true
    city?: true
    company?: true
    linkedIn?: true
    bio?: true
    lastLoginAt?: true
    totalSpent?: true
    coursesOwned?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    role: $Enums.Role
    phone: string | null
    language: string | null
    country: string | null
    occupation: string | null
    totalspent: number | null
    coursesowned: number | null
    profileImage: string | null
    city: string | null
    company: string | null
    linkedIn: string | null
    bio: string | null
    lastLoginAt: Date | null
    totalSpent: number | null
    coursesOwned: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    phone?: boolean
    language?: boolean
    country?: boolean
    occupation?: boolean
    totalspent?: boolean
    coursesowned?: boolean
    profileImage?: boolean
    city?: boolean
    company?: boolean
    linkedIn?: boolean
    bio?: boolean
    lastLoginAt?: boolean
    totalSpent?: boolean
    coursesOwned?: boolean
    CartItem?: boolean | User$CartItemArgs<ExtArgs>
    Payment?: boolean | User$PaymentArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    course_enrollments?: boolean | User$course_enrollmentsArgs<ExtArgs>
    user_progress?: boolean | User$user_progressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    phone?: boolean
    language?: boolean
    country?: boolean
    occupation?: boolean
    totalspent?: boolean
    coursesowned?: boolean
    profileImage?: boolean
    city?: boolean
    company?: boolean
    linkedIn?: boolean
    bio?: boolean
    lastLoginAt?: boolean
    totalSpent?: boolean
    coursesOwned?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    phone?: boolean
    language?: boolean
    country?: boolean
    occupation?: boolean
    totalspent?: boolean
    coursesowned?: boolean
    profileImage?: boolean
    city?: boolean
    company?: boolean
    linkedIn?: boolean
    bio?: boolean
    lastLoginAt?: boolean
    totalSpent?: boolean
    coursesOwned?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    phone?: boolean
    language?: boolean
    country?: boolean
    occupation?: boolean
    totalspent?: boolean
    coursesowned?: boolean
    profileImage?: boolean
    city?: boolean
    company?: boolean
    linkedIn?: boolean
    bio?: boolean
    lastLoginAt?: boolean
    totalSpent?: boolean
    coursesOwned?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt" | "role" | "phone" | "language" | "country" | "occupation" | "totalspent" | "coursesowned" | "profileImage" | "city" | "company" | "linkedIn" | "bio" | "lastLoginAt" | "totalSpent" | "coursesOwned", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CartItem?: boolean | User$CartItemArgs<ExtArgs>
    Payment?: boolean | User$PaymentArgs<ExtArgs>
    achievements?: boolean | User$achievementsArgs<ExtArgs>
    course_enrollments?: boolean | User$course_enrollmentsArgs<ExtArgs>
    user_progress?: boolean | User$user_progressArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      CartItem: Prisma.$CartItemPayload<ExtArgs>[]
      Payment: Prisma.$PaymentPayload<ExtArgs>[]
      achievements: Prisma.$achievementsPayload<ExtArgs>[]
      course_enrollments: Prisma.$course_enrollmentsPayload<ExtArgs>[]
      user_progress: Prisma.$user_progressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
      role: $Enums.Role
      phone: string | null
      language: string | null
      country: string | null
      occupation: string | null
      totalspent: number | null
      coursesowned: number | null
      profileImage: string | null
      city: string | null
      company: string | null
      linkedIn: string | null
      bio: string | null
      lastLoginAt: Date | null
      totalSpent: number | null
      coursesOwned: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CartItem<T extends User$CartItemArgs<ExtArgs> = {}>(args?: Subset<T, User$CartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Payment<T extends User$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, User$PaymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    achievements<T extends User$achievementsArgs<ExtArgs> = {}>(args?: Subset<T, User$achievementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course_enrollments<T extends User$course_enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$course_enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_enrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_progress<T extends User$user_progressArgs<ExtArgs> = {}>(args?: Subset<T, User$user_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly phone: FieldRef<"User", 'String'>
    readonly language: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly occupation: FieldRef<"User", 'String'>
    readonly totalspent: FieldRef<"User", 'Float'>
    readonly coursesowned: FieldRef<"User", 'Int'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly company: FieldRef<"User", 'String'>
    readonly linkedIn: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly totalSpent: FieldRef<"User", 'Float'>
    readonly coursesOwned: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.CartItem
   */
  export type User$CartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * User.Payment
   */
  export type User$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.achievements
   */
  export type User$achievementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    where?: achievementsWhereInput
    orderBy?: achievementsOrderByWithRelationInput | achievementsOrderByWithRelationInput[]
    cursor?: achievementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * User.course_enrollments
   */
  export type User$course_enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_enrollments
     */
    select?: course_enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_enrollments
     */
    omit?: course_enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_enrollmentsInclude<ExtArgs> | null
    where?: course_enrollmentsWhereInput
    orderBy?: course_enrollmentsOrderByWithRelationInput | course_enrollmentsOrderByWithRelationInput[]
    cursor?: course_enrollmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_enrollmentsScalarFieldEnum | Course_enrollmentsScalarFieldEnum[]
  }

  /**
   * User.user_progress
   */
  export type User$user_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_progress
     */
    select?: user_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_progress
     */
    omit?: user_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_progressInclude<ExtArgs> | null
    where?: user_progressWhereInput
    orderBy?: user_progressOrderByWithRelationInput | user_progressOrderByWithRelationInput[]
    cursor?: user_progressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_progressScalarFieldEnum | User_progressScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model course_enrollments
   */

  export type AggregateCourse_enrollments = {
    _count: Course_enrollmentsCountAggregateOutputType | null
    _avg: Course_enrollmentsAvgAggregateOutputType | null
    _sum: Course_enrollmentsSumAggregateOutputType | null
    _min: Course_enrollmentsMinAggregateOutputType | null
    _max: Course_enrollmentsMaxAggregateOutputType | null
  }

  export type Course_enrollmentsAvgAggregateOutputType = {
    price: number | null
  }

  export type Course_enrollmentsSumAggregateOutputType = {
    price: number | null
  }

  export type Course_enrollmentsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    paymentId: string | null
    certificationName: string | null
    provider: string | null
    price: number | null
    status: string | null
    enrolledAt: Date | null
  }

  export type Course_enrollmentsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    paymentId: string | null
    certificationName: string | null
    provider: string | null
    price: number | null
    status: string | null
    enrolledAt: Date | null
  }

  export type Course_enrollmentsCountAggregateOutputType = {
    id: number
    userId: number
    paymentId: number
    certificationName: number
    provider: number
    price: number
    status: number
    enrolledAt: number
    _all: number
  }


  export type Course_enrollmentsAvgAggregateInputType = {
    price?: true
  }

  export type Course_enrollmentsSumAggregateInputType = {
    price?: true
  }

  export type Course_enrollmentsMinAggregateInputType = {
    id?: true
    userId?: true
    paymentId?: true
    certificationName?: true
    provider?: true
    price?: true
    status?: true
    enrolledAt?: true
  }

  export type Course_enrollmentsMaxAggregateInputType = {
    id?: true
    userId?: true
    paymentId?: true
    certificationName?: true
    provider?: true
    price?: true
    status?: true
    enrolledAt?: true
  }

  export type Course_enrollmentsCountAggregateInputType = {
    id?: true
    userId?: true
    paymentId?: true
    certificationName?: true
    provider?: true
    price?: true
    status?: true
    enrolledAt?: true
    _all?: true
  }

  export type Course_enrollmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_enrollments to aggregate.
     */
    where?: course_enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_enrollments to fetch.
     */
    orderBy?: course_enrollmentsOrderByWithRelationInput | course_enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: course_enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned course_enrollments
    **/
    _count?: true | Course_enrollmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Course_enrollmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Course_enrollmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Course_enrollmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Course_enrollmentsMaxAggregateInputType
  }

  export type GetCourse_enrollmentsAggregateType<T extends Course_enrollmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse_enrollments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse_enrollments[P]>
      : GetScalarType<T[P], AggregateCourse_enrollments[P]>
  }




  export type course_enrollmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_enrollmentsWhereInput
    orderBy?: course_enrollmentsOrderByWithAggregationInput | course_enrollmentsOrderByWithAggregationInput[]
    by: Course_enrollmentsScalarFieldEnum[] | Course_enrollmentsScalarFieldEnum
    having?: course_enrollmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Course_enrollmentsCountAggregateInputType | true
    _avg?: Course_enrollmentsAvgAggregateInputType
    _sum?: Course_enrollmentsSumAggregateInputType
    _min?: Course_enrollmentsMinAggregateInputType
    _max?: Course_enrollmentsMaxAggregateInputType
  }

  export type Course_enrollmentsGroupByOutputType = {
    id: string
    userId: string
    paymentId: string
    certificationName: string
    provider: string
    price: number
    status: string | null
    enrolledAt: Date | null
    _count: Course_enrollmentsCountAggregateOutputType | null
    _avg: Course_enrollmentsAvgAggregateOutputType | null
    _sum: Course_enrollmentsSumAggregateOutputType | null
    _min: Course_enrollmentsMinAggregateOutputType | null
    _max: Course_enrollmentsMaxAggregateOutputType | null
  }

  type GetCourse_enrollmentsGroupByPayload<T extends course_enrollmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Course_enrollmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Course_enrollmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Course_enrollmentsGroupByOutputType[P]>
            : GetScalarType<T[P], Course_enrollmentsGroupByOutputType[P]>
        }
      >
    >


  export type course_enrollmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    paymentId?: boolean
    certificationName?: boolean
    provider?: boolean
    price?: boolean
    status?: boolean
    enrolledAt?: boolean
    Payment?: boolean | PaymentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    user_progress?: boolean | course_enrollments$user_progressArgs<ExtArgs>
    _count?: boolean | Course_enrollmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_enrollments"]>

  export type course_enrollmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    paymentId?: boolean
    certificationName?: boolean
    provider?: boolean
    price?: boolean
    status?: boolean
    enrolledAt?: boolean
    Payment?: boolean | PaymentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_enrollments"]>

  export type course_enrollmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    paymentId?: boolean
    certificationName?: boolean
    provider?: boolean
    price?: boolean
    status?: boolean
    enrolledAt?: boolean
    Payment?: boolean | PaymentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_enrollments"]>

  export type course_enrollmentsSelectScalar = {
    id?: boolean
    userId?: boolean
    paymentId?: boolean
    certificationName?: boolean
    provider?: boolean
    price?: boolean
    status?: boolean
    enrolledAt?: boolean
  }

  export type course_enrollmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "paymentId" | "certificationName" | "provider" | "price" | "status" | "enrolledAt", ExtArgs["result"]["course_enrollments"]>
  export type course_enrollmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payment?: boolean | PaymentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    user_progress?: boolean | course_enrollments$user_progressArgs<ExtArgs>
    _count?: boolean | Course_enrollmentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type course_enrollmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payment?: boolean | PaymentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type course_enrollmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Payment?: boolean | PaymentDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $course_enrollmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course_enrollments"
    objects: {
      Payment: Prisma.$PaymentPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
      user_progress: Prisma.$user_progressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      paymentId: string
      certificationName: string
      provider: string
      price: number
      status: string | null
      enrolledAt: Date | null
    }, ExtArgs["result"]["course_enrollments"]>
    composites: {}
  }

  type course_enrollmentsGetPayload<S extends boolean | null | undefined | course_enrollmentsDefaultArgs> = $Result.GetResult<Prisma.$course_enrollmentsPayload, S>

  type course_enrollmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<course_enrollmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Course_enrollmentsCountAggregateInputType | true
    }

  export interface course_enrollmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course_enrollments'], meta: { name: 'course_enrollments' } }
    /**
     * Find zero or one Course_enrollments that matches the filter.
     * @param {course_enrollmentsFindUniqueArgs} args - Arguments to find a Course_enrollments
     * @example
     * // Get one Course_enrollments
     * const course_enrollments = await prisma.course_enrollments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends course_enrollmentsFindUniqueArgs>(args: SelectSubset<T, course_enrollmentsFindUniqueArgs<ExtArgs>>): Prisma__course_enrollmentsClient<$Result.GetResult<Prisma.$course_enrollmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course_enrollments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {course_enrollmentsFindUniqueOrThrowArgs} args - Arguments to find a Course_enrollments
     * @example
     * // Get one Course_enrollments
     * const course_enrollments = await prisma.course_enrollments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends course_enrollmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, course_enrollmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__course_enrollmentsClient<$Result.GetResult<Prisma.$course_enrollmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_enrollmentsFindFirstArgs} args - Arguments to find a Course_enrollments
     * @example
     * // Get one Course_enrollments
     * const course_enrollments = await prisma.course_enrollments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends course_enrollmentsFindFirstArgs>(args?: SelectSubset<T, course_enrollmentsFindFirstArgs<ExtArgs>>): Prisma__course_enrollmentsClient<$Result.GetResult<Prisma.$course_enrollmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_enrollments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_enrollmentsFindFirstOrThrowArgs} args - Arguments to find a Course_enrollments
     * @example
     * // Get one Course_enrollments
     * const course_enrollments = await prisma.course_enrollments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends course_enrollmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, course_enrollmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__course_enrollmentsClient<$Result.GetResult<Prisma.$course_enrollmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Course_enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_enrollmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Course_enrollments
     * const course_enrollments = await prisma.course_enrollments.findMany()
     * 
     * // Get first 10 Course_enrollments
     * const course_enrollments = await prisma.course_enrollments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const course_enrollmentsWithIdOnly = await prisma.course_enrollments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends course_enrollmentsFindManyArgs>(args?: SelectSubset<T, course_enrollmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_enrollmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course_enrollments.
     * @param {course_enrollmentsCreateArgs} args - Arguments to create a Course_enrollments.
     * @example
     * // Create one Course_enrollments
     * const Course_enrollments = await prisma.course_enrollments.create({
     *   data: {
     *     // ... data to create a Course_enrollments
     *   }
     * })
     * 
     */
    create<T extends course_enrollmentsCreateArgs>(args: SelectSubset<T, course_enrollmentsCreateArgs<ExtArgs>>): Prisma__course_enrollmentsClient<$Result.GetResult<Prisma.$course_enrollmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Course_enrollments.
     * @param {course_enrollmentsCreateManyArgs} args - Arguments to create many Course_enrollments.
     * @example
     * // Create many Course_enrollments
     * const course_enrollments = await prisma.course_enrollments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends course_enrollmentsCreateManyArgs>(args?: SelectSubset<T, course_enrollmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Course_enrollments and returns the data saved in the database.
     * @param {course_enrollmentsCreateManyAndReturnArgs} args - Arguments to create many Course_enrollments.
     * @example
     * // Create many Course_enrollments
     * const course_enrollments = await prisma.course_enrollments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Course_enrollments and only return the `id`
     * const course_enrollmentsWithIdOnly = await prisma.course_enrollments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends course_enrollmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, course_enrollmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_enrollmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course_enrollments.
     * @param {course_enrollmentsDeleteArgs} args - Arguments to delete one Course_enrollments.
     * @example
     * // Delete one Course_enrollments
     * const Course_enrollments = await prisma.course_enrollments.delete({
     *   where: {
     *     // ... filter to delete one Course_enrollments
     *   }
     * })
     * 
     */
    delete<T extends course_enrollmentsDeleteArgs>(args: SelectSubset<T, course_enrollmentsDeleteArgs<ExtArgs>>): Prisma__course_enrollmentsClient<$Result.GetResult<Prisma.$course_enrollmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course_enrollments.
     * @param {course_enrollmentsUpdateArgs} args - Arguments to update one Course_enrollments.
     * @example
     * // Update one Course_enrollments
     * const course_enrollments = await prisma.course_enrollments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends course_enrollmentsUpdateArgs>(args: SelectSubset<T, course_enrollmentsUpdateArgs<ExtArgs>>): Prisma__course_enrollmentsClient<$Result.GetResult<Prisma.$course_enrollmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Course_enrollments.
     * @param {course_enrollmentsDeleteManyArgs} args - Arguments to filter Course_enrollments to delete.
     * @example
     * // Delete a few Course_enrollments
     * const { count } = await prisma.course_enrollments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends course_enrollmentsDeleteManyArgs>(args?: SelectSubset<T, course_enrollmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_enrollmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Course_enrollments
     * const course_enrollments = await prisma.course_enrollments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends course_enrollmentsUpdateManyArgs>(args: SelectSubset<T, course_enrollmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_enrollments and returns the data updated in the database.
     * @param {course_enrollmentsUpdateManyAndReturnArgs} args - Arguments to update many Course_enrollments.
     * @example
     * // Update many Course_enrollments
     * const course_enrollments = await prisma.course_enrollments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Course_enrollments and only return the `id`
     * const course_enrollmentsWithIdOnly = await prisma.course_enrollments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends course_enrollmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, course_enrollmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_enrollmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course_enrollments.
     * @param {course_enrollmentsUpsertArgs} args - Arguments to update or create a Course_enrollments.
     * @example
     * // Update or create a Course_enrollments
     * const course_enrollments = await prisma.course_enrollments.upsert({
     *   create: {
     *     // ... data to create a Course_enrollments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course_enrollments we want to update
     *   }
     * })
     */
    upsert<T extends course_enrollmentsUpsertArgs>(args: SelectSubset<T, course_enrollmentsUpsertArgs<ExtArgs>>): Prisma__course_enrollmentsClient<$Result.GetResult<Prisma.$course_enrollmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Course_enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_enrollmentsCountArgs} args - Arguments to filter Course_enrollments to count.
     * @example
     * // Count the number of Course_enrollments
     * const count = await prisma.course_enrollments.count({
     *   where: {
     *     // ... the filter for the Course_enrollments we want to count
     *   }
     * })
    **/
    count<T extends course_enrollmentsCountArgs>(
      args?: Subset<T, course_enrollmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Course_enrollmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course_enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_enrollmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Course_enrollmentsAggregateArgs>(args: Subset<T, Course_enrollmentsAggregateArgs>): Prisma.PrismaPromise<GetCourse_enrollmentsAggregateType<T>>

    /**
     * Group by Course_enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_enrollmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends course_enrollmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: course_enrollmentsGroupByArgs['orderBy'] }
        : { orderBy?: course_enrollmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, course_enrollmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_enrollmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course_enrollments model
   */
  readonly fields: course_enrollmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course_enrollments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__course_enrollmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_progress<T extends course_enrollments$user_progressArgs<ExtArgs> = {}>(args?: Subset<T, course_enrollments$user_progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the course_enrollments model
   */
  interface course_enrollmentsFieldRefs {
    readonly id: FieldRef<"course_enrollments", 'String'>
    readonly userId: FieldRef<"course_enrollments", 'String'>
    readonly paymentId: FieldRef<"course_enrollments", 'String'>
    readonly certificationName: FieldRef<"course_enrollments", 'String'>
    readonly provider: FieldRef<"course_enrollments", 'String'>
    readonly price: FieldRef<"course_enrollments", 'Float'>
    readonly status: FieldRef<"course_enrollments", 'String'>
    readonly enrolledAt: FieldRef<"course_enrollments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * course_enrollments findUnique
   */
  export type course_enrollmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_enrollments
     */
    select?: course_enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_enrollments
     */
    omit?: course_enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which course_enrollments to fetch.
     */
    where: course_enrollmentsWhereUniqueInput
  }

  /**
   * course_enrollments findUniqueOrThrow
   */
  export type course_enrollmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_enrollments
     */
    select?: course_enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_enrollments
     */
    omit?: course_enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which course_enrollments to fetch.
     */
    where: course_enrollmentsWhereUniqueInput
  }

  /**
   * course_enrollments findFirst
   */
  export type course_enrollmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_enrollments
     */
    select?: course_enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_enrollments
     */
    omit?: course_enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which course_enrollments to fetch.
     */
    where?: course_enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_enrollments to fetch.
     */
    orderBy?: course_enrollmentsOrderByWithRelationInput | course_enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_enrollments.
     */
    cursor?: course_enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_enrollments.
     */
    distinct?: Course_enrollmentsScalarFieldEnum | Course_enrollmentsScalarFieldEnum[]
  }

  /**
   * course_enrollments findFirstOrThrow
   */
  export type course_enrollmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_enrollments
     */
    select?: course_enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_enrollments
     */
    omit?: course_enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which course_enrollments to fetch.
     */
    where?: course_enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_enrollments to fetch.
     */
    orderBy?: course_enrollmentsOrderByWithRelationInput | course_enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_enrollments.
     */
    cursor?: course_enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_enrollments.
     */
    distinct?: Course_enrollmentsScalarFieldEnum | Course_enrollmentsScalarFieldEnum[]
  }

  /**
   * course_enrollments findMany
   */
  export type course_enrollmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_enrollments
     */
    select?: course_enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_enrollments
     */
    omit?: course_enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_enrollmentsInclude<ExtArgs> | null
    /**
     * Filter, which course_enrollments to fetch.
     */
    where?: course_enrollmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_enrollments to fetch.
     */
    orderBy?: course_enrollmentsOrderByWithRelationInput | course_enrollmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing course_enrollments.
     */
    cursor?: course_enrollmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_enrollments.
     */
    skip?: number
    distinct?: Course_enrollmentsScalarFieldEnum | Course_enrollmentsScalarFieldEnum[]
  }

  /**
   * course_enrollments create
   */
  export type course_enrollmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_enrollments
     */
    select?: course_enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_enrollments
     */
    omit?: course_enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_enrollmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a course_enrollments.
     */
    data: XOR<course_enrollmentsCreateInput, course_enrollmentsUncheckedCreateInput>
  }

  /**
   * course_enrollments createMany
   */
  export type course_enrollmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many course_enrollments.
     */
    data: course_enrollmentsCreateManyInput | course_enrollmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course_enrollments createManyAndReturn
   */
  export type course_enrollmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_enrollments
     */
    select?: course_enrollmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_enrollments
     */
    omit?: course_enrollmentsOmit<ExtArgs> | null
    /**
     * The data used to create many course_enrollments.
     */
    data: course_enrollmentsCreateManyInput | course_enrollmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_enrollmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_enrollments update
   */
  export type course_enrollmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_enrollments
     */
    select?: course_enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_enrollments
     */
    omit?: course_enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_enrollmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a course_enrollments.
     */
    data: XOR<course_enrollmentsUpdateInput, course_enrollmentsUncheckedUpdateInput>
    /**
     * Choose, which course_enrollments to update.
     */
    where: course_enrollmentsWhereUniqueInput
  }

  /**
   * course_enrollments updateMany
   */
  export type course_enrollmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update course_enrollments.
     */
    data: XOR<course_enrollmentsUpdateManyMutationInput, course_enrollmentsUncheckedUpdateManyInput>
    /**
     * Filter which course_enrollments to update
     */
    where?: course_enrollmentsWhereInput
    /**
     * Limit how many course_enrollments to update.
     */
    limit?: number
  }

  /**
   * course_enrollments updateManyAndReturn
   */
  export type course_enrollmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_enrollments
     */
    select?: course_enrollmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_enrollments
     */
    omit?: course_enrollmentsOmit<ExtArgs> | null
    /**
     * The data used to update course_enrollments.
     */
    data: XOR<course_enrollmentsUpdateManyMutationInput, course_enrollmentsUncheckedUpdateManyInput>
    /**
     * Filter which course_enrollments to update
     */
    where?: course_enrollmentsWhereInput
    /**
     * Limit how many course_enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_enrollmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_enrollments upsert
   */
  export type course_enrollmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_enrollments
     */
    select?: course_enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_enrollments
     */
    omit?: course_enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_enrollmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the course_enrollments to update in case it exists.
     */
    where: course_enrollmentsWhereUniqueInput
    /**
     * In case the course_enrollments found by the `where` argument doesn't exist, create a new course_enrollments with this data.
     */
    create: XOR<course_enrollmentsCreateInput, course_enrollmentsUncheckedCreateInput>
    /**
     * In case the course_enrollments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<course_enrollmentsUpdateInput, course_enrollmentsUncheckedUpdateInput>
  }

  /**
   * course_enrollments delete
   */
  export type course_enrollmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_enrollments
     */
    select?: course_enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_enrollments
     */
    omit?: course_enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_enrollmentsInclude<ExtArgs> | null
    /**
     * Filter which course_enrollments to delete.
     */
    where: course_enrollmentsWhereUniqueInput
  }

  /**
   * course_enrollments deleteMany
   */
  export type course_enrollmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_enrollments to delete
     */
    where?: course_enrollmentsWhereInput
    /**
     * Limit how many course_enrollments to delete.
     */
    limit?: number
  }

  /**
   * course_enrollments.user_progress
   */
  export type course_enrollments$user_progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_progress
     */
    select?: user_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_progress
     */
    omit?: user_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_progressInclude<ExtArgs> | null
    where?: user_progressWhereInput
    orderBy?: user_progressOrderByWithRelationInput | user_progressOrderByWithRelationInput[]
    cursor?: user_progressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_progressScalarFieldEnum | User_progressScalarFieldEnum[]
  }

  /**
   * course_enrollments without action
   */
  export type course_enrollmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_enrollments
     */
    select?: course_enrollmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_enrollments
     */
    omit?: course_enrollmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_enrollmentsInclude<ExtArgs> | null
  }


  /**
   * Model achievements
   */

  export type AggregateAchievements = {
    _count: AchievementsCountAggregateOutputType | null
    _avg: AchievementsAvgAggregateOutputType | null
    _sum: AchievementsSumAggregateOutputType | null
    _min: AchievementsMinAggregateOutputType | null
    _max: AchievementsMaxAggregateOutputType | null
  }

  export type AchievementsAvgAggregateOutputType = {
    points: number | null
  }

  export type AchievementsSumAggregateOutputType = {
    points: number | null
  }

  export type AchievementsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    description: string | null
    certificationId: string | null
    badgeUrl: string | null
    certificateUrl: string | null
    points: number | null
    issuedAt: Date | null
    expiresAt: Date | null
    verificationCode: string | null
  }

  export type AchievementsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    description: string | null
    certificationId: string | null
    badgeUrl: string | null
    certificateUrl: string | null
    points: number | null
    issuedAt: Date | null
    expiresAt: Date | null
    verificationCode: string | null
  }

  export type AchievementsCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    description: number
    certificationId: number
    badgeUrl: number
    certificateUrl: number
    points: number
    issuedAt: number
    expiresAt: number
    verificationCode: number
    _all: number
  }


  export type AchievementsAvgAggregateInputType = {
    points?: true
  }

  export type AchievementsSumAggregateInputType = {
    points?: true
  }

  export type AchievementsMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    description?: true
    certificationId?: true
    badgeUrl?: true
    certificateUrl?: true
    points?: true
    issuedAt?: true
    expiresAt?: true
    verificationCode?: true
  }

  export type AchievementsMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    description?: true
    certificationId?: true
    badgeUrl?: true
    certificateUrl?: true
    points?: true
    issuedAt?: true
    expiresAt?: true
    verificationCode?: true
  }

  export type AchievementsCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    description?: true
    certificationId?: true
    badgeUrl?: true
    certificateUrl?: true
    points?: true
    issuedAt?: true
    expiresAt?: true
    verificationCode?: true
    _all?: true
  }

  export type AchievementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which achievements to aggregate.
     */
    where?: achievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementsOrderByWithRelationInput | achievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: achievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned achievements
    **/
    _count?: true | AchievementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementsMaxAggregateInputType
  }

  export type GetAchievementsAggregateType<T extends AchievementsAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievements[P]>
      : GetScalarType<T[P], AggregateAchievements[P]>
  }




  export type achievementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: achievementsWhereInput
    orderBy?: achievementsOrderByWithAggregationInput | achievementsOrderByWithAggregationInput[]
    by: AchievementsScalarFieldEnum[] | AchievementsScalarFieldEnum
    having?: achievementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementsCountAggregateInputType | true
    _avg?: AchievementsAvgAggregateInputType
    _sum?: AchievementsSumAggregateInputType
    _min?: AchievementsMinAggregateInputType
    _max?: AchievementsMaxAggregateInputType
  }

  export type AchievementsGroupByOutputType = {
    id: string
    userId: string
    type: string
    title: string
    description: string
    certificationId: string | null
    badgeUrl: string | null
    certificateUrl: string | null
    points: number
    issuedAt: Date
    expiresAt: Date | null
    verificationCode: string | null
    _count: AchievementsCountAggregateOutputType | null
    _avg: AchievementsAvgAggregateOutputType | null
    _sum: AchievementsSumAggregateOutputType | null
    _min: AchievementsMinAggregateOutputType | null
    _max: AchievementsMaxAggregateOutputType | null
  }

  type GetAchievementsGroupByPayload<T extends achievementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementsGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementsGroupByOutputType[P]>
        }
      >
    >


  export type achievementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    certificationId?: boolean
    badgeUrl?: boolean
    certificateUrl?: boolean
    points?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    verificationCode?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievements"]>

  export type achievementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    certificationId?: boolean
    badgeUrl?: boolean
    certificateUrl?: boolean
    points?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    verificationCode?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievements"]>

  export type achievementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    certificationId?: boolean
    badgeUrl?: boolean
    certificateUrl?: boolean
    points?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    verificationCode?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievements"]>

  export type achievementsSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    certificationId?: boolean
    badgeUrl?: boolean
    certificateUrl?: boolean
    points?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    verificationCode?: boolean
  }

  export type achievementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "title" | "description" | "certificationId" | "badgeUrl" | "certificateUrl" | "points" | "issuedAt" | "expiresAt" | "verificationCode", ExtArgs["result"]["achievements"]>
  export type achievementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type achievementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type achievementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $achievementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "achievements"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      title: string
      description: string
      certificationId: string | null
      badgeUrl: string | null
      certificateUrl: string | null
      points: number
      issuedAt: Date
      expiresAt: Date | null
      verificationCode: string | null
    }, ExtArgs["result"]["achievements"]>
    composites: {}
  }

  type achievementsGetPayload<S extends boolean | null | undefined | achievementsDefaultArgs> = $Result.GetResult<Prisma.$achievementsPayload, S>

  type achievementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<achievementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AchievementsCountAggregateInputType | true
    }

  export interface achievementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['achievements'], meta: { name: 'achievements' } }
    /**
     * Find zero or one Achievements that matches the filter.
     * @param {achievementsFindUniqueArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends achievementsFindUniqueArgs>(args: SelectSubset<T, achievementsFindUniqueArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Achievements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {achievementsFindUniqueOrThrowArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends achievementsFindUniqueOrThrowArgs>(args: SelectSubset<T, achievementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsFindFirstArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends achievementsFindFirstArgs>(args?: SelectSubset<T, achievementsFindFirstArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Achievements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsFindFirstOrThrowArgs} args - Arguments to find a Achievements
     * @example
     * // Get one Achievements
     * const achievements = await prisma.achievements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends achievementsFindFirstOrThrowArgs>(args?: SelectSubset<T, achievementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievements.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievements.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementsWithIdOnly = await prisma.achievements.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends achievementsFindManyArgs>(args?: SelectSubset<T, achievementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Achievements.
     * @param {achievementsCreateArgs} args - Arguments to create a Achievements.
     * @example
     * // Create one Achievements
     * const Achievements = await prisma.achievements.create({
     *   data: {
     *     // ... data to create a Achievements
     *   }
     * })
     * 
     */
    create<T extends achievementsCreateArgs>(args: SelectSubset<T, achievementsCreateArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Achievements.
     * @param {achievementsCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievements = await prisma.achievements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends achievementsCreateManyArgs>(args?: SelectSubset<T, achievementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {achievementsCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievements = await prisma.achievements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementsWithIdOnly = await prisma.achievements.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends achievementsCreateManyAndReturnArgs>(args?: SelectSubset<T, achievementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Achievements.
     * @param {achievementsDeleteArgs} args - Arguments to delete one Achievements.
     * @example
     * // Delete one Achievements
     * const Achievements = await prisma.achievements.delete({
     *   where: {
     *     // ... filter to delete one Achievements
     *   }
     * })
     * 
     */
    delete<T extends achievementsDeleteArgs>(args: SelectSubset<T, achievementsDeleteArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Achievements.
     * @param {achievementsUpdateArgs} args - Arguments to update one Achievements.
     * @example
     * // Update one Achievements
     * const achievements = await prisma.achievements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends achievementsUpdateArgs>(args: SelectSubset<T, achievementsUpdateArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Achievements.
     * @param {achievementsDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends achievementsDeleteManyArgs>(args?: SelectSubset<T, achievementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievements = await prisma.achievements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends achievementsUpdateManyArgs>(args: SelectSubset<T, achievementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements and returns the data updated in the database.
     * @param {achievementsUpdateManyAndReturnArgs} args - Arguments to update many Achievements.
     * @example
     * // Update many Achievements
     * const achievements = await prisma.achievements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Achievements and only return the `id`
     * const achievementsWithIdOnly = await prisma.achievements.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends achievementsUpdateManyAndReturnArgs>(args: SelectSubset<T, achievementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Achievements.
     * @param {achievementsUpsertArgs} args - Arguments to update or create a Achievements.
     * @example
     * // Update or create a Achievements
     * const achievements = await prisma.achievements.upsert({
     *   create: {
     *     // ... data to create a Achievements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievements we want to update
     *   }
     * })
     */
    upsert<T extends achievementsUpsertArgs>(args: SelectSubset<T, achievementsUpsertArgs<ExtArgs>>): Prisma__achievementsClient<$Result.GetResult<Prisma.$achievementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievements.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends achievementsCountArgs>(
      args?: Subset<T, achievementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AchievementsAggregateArgs>(args: Subset<T, AchievementsAggregateArgs>): Prisma.PrismaPromise<GetAchievementsAggregateType<T>>

    /**
     * Group by Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {achievementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends achievementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: achievementsGroupByArgs['orderBy'] }
        : { orderBy?: achievementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, achievementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the achievements model
   */
  readonly fields: achievementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for achievements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__achievementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the achievements model
   */
  interface achievementsFieldRefs {
    readonly id: FieldRef<"achievements", 'String'>
    readonly userId: FieldRef<"achievements", 'String'>
    readonly type: FieldRef<"achievements", 'String'>
    readonly title: FieldRef<"achievements", 'String'>
    readonly description: FieldRef<"achievements", 'String'>
    readonly certificationId: FieldRef<"achievements", 'String'>
    readonly badgeUrl: FieldRef<"achievements", 'String'>
    readonly certificateUrl: FieldRef<"achievements", 'String'>
    readonly points: FieldRef<"achievements", 'Int'>
    readonly issuedAt: FieldRef<"achievements", 'DateTime'>
    readonly expiresAt: FieldRef<"achievements", 'DateTime'>
    readonly verificationCode: FieldRef<"achievements", 'String'>
  }
    

  // Custom InputTypes
  /**
   * achievements findUnique
   */
  export type achievementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where: achievementsWhereUniqueInput
  }

  /**
   * achievements findUniqueOrThrow
   */
  export type achievementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where: achievementsWhereUniqueInput
  }

  /**
   * achievements findFirst
   */
  export type achievementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where?: achievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementsOrderByWithRelationInput | achievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for achievements.
     */
    cursor?: achievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of achievements.
     */
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * achievements findFirstOrThrow
   */
  export type achievementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where?: achievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementsOrderByWithRelationInput | achievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for achievements.
     */
    cursor?: achievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of achievements.
     */
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * achievements findMany
   */
  export type achievementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * Filter, which achievements to fetch.
     */
    where?: achievementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of achievements to fetch.
     */
    orderBy?: achievementsOrderByWithRelationInput | achievementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing achievements.
     */
    cursor?: achievementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` achievements.
     */
    skip?: number
    distinct?: AchievementsScalarFieldEnum | AchievementsScalarFieldEnum[]
  }

  /**
   * achievements create
   */
  export type achievementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * The data needed to create a achievements.
     */
    data: XOR<achievementsCreateInput, achievementsUncheckedCreateInput>
  }

  /**
   * achievements createMany
   */
  export type achievementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many achievements.
     */
    data: achievementsCreateManyInput | achievementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * achievements createManyAndReturn
   */
  export type achievementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * The data used to create many achievements.
     */
    data: achievementsCreateManyInput | achievementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * achievements update
   */
  export type achievementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * The data needed to update a achievements.
     */
    data: XOR<achievementsUpdateInput, achievementsUncheckedUpdateInput>
    /**
     * Choose, which achievements to update.
     */
    where: achievementsWhereUniqueInput
  }

  /**
   * achievements updateMany
   */
  export type achievementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update achievements.
     */
    data: XOR<achievementsUpdateManyMutationInput, achievementsUncheckedUpdateManyInput>
    /**
     * Filter which achievements to update
     */
    where?: achievementsWhereInput
    /**
     * Limit how many achievements to update.
     */
    limit?: number
  }

  /**
   * achievements updateManyAndReturn
   */
  export type achievementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * The data used to update achievements.
     */
    data: XOR<achievementsUpdateManyMutationInput, achievementsUncheckedUpdateManyInput>
    /**
     * Filter which achievements to update
     */
    where?: achievementsWhereInput
    /**
     * Limit how many achievements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * achievements upsert
   */
  export type achievementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * The filter to search for the achievements to update in case it exists.
     */
    where: achievementsWhereUniqueInput
    /**
     * In case the achievements found by the `where` argument doesn't exist, create a new achievements with this data.
     */
    create: XOR<achievementsCreateInput, achievementsUncheckedCreateInput>
    /**
     * In case the achievements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<achievementsUpdateInput, achievementsUncheckedUpdateInput>
  }

  /**
   * achievements delete
   */
  export type achievementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
    /**
     * Filter which achievements to delete.
     */
    where: achievementsWhereUniqueInput
  }

  /**
   * achievements deleteMany
   */
  export type achievementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which achievements to delete
     */
    where?: achievementsWhereInput
    /**
     * Limit how many achievements to delete.
     */
    limit?: number
  }

  /**
   * achievements without action
   */
  export type achievementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the achievements
     */
    select?: achievementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the achievements
     */
    omit?: achievementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: achievementsInclude<ExtArgs> | null
  }


  /**
   * Model user_progress
   */

  export type AggregateUser_progress = {
    _count: User_progressCountAggregateOutputType | null
    _avg: User_progressAvgAggregateOutputType | null
    _sum: User_progressSumAggregateOutputType | null
    _min: User_progressMinAggregateOutputType | null
    _max: User_progressMaxAggregateOutputType | null
  }

  export type User_progressAvgAggregateOutputType = {
    progressPercent: number | null
    timeSpentMinutes: number | null
    modulesCompleted: number | null
    totalModules: number | null
  }

  export type User_progressSumAggregateOutputType = {
    progressPercent: number | null
    timeSpentMinutes: number | null
    modulesCompleted: number | null
    totalModules: number | null
  }

  export type User_progressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    enrollmentId: string | null
    progressPercent: number | null
    timeSpentMinutes: number | null
    lastAccessed: Date | null
    modulesCompleted: number | null
    totalModules: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type User_progressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    enrollmentId: string | null
    progressPercent: number | null
    timeSpentMinutes: number | null
    lastAccessed: Date | null
    modulesCompleted: number | null
    totalModules: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type User_progressCountAggregateOutputType = {
    id: number
    userId: number
    enrollmentId: number
    progressPercent: number
    timeSpentMinutes: number
    lastAccessed: number
    modulesCompleted: number
    totalModules: number
    notes: number
    bookmarks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type User_progressAvgAggregateInputType = {
    progressPercent?: true
    timeSpentMinutes?: true
    modulesCompleted?: true
    totalModules?: true
  }

  export type User_progressSumAggregateInputType = {
    progressPercent?: true
    timeSpentMinutes?: true
    modulesCompleted?: true
    totalModules?: true
  }

  export type User_progressMinAggregateInputType = {
    id?: true
    userId?: true
    enrollmentId?: true
    progressPercent?: true
    timeSpentMinutes?: true
    lastAccessed?: true
    modulesCompleted?: true
    totalModules?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type User_progressMaxAggregateInputType = {
    id?: true
    userId?: true
    enrollmentId?: true
    progressPercent?: true
    timeSpentMinutes?: true
    lastAccessed?: true
    modulesCompleted?: true
    totalModules?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type User_progressCountAggregateInputType = {
    id?: true
    userId?: true
    enrollmentId?: true
    progressPercent?: true
    timeSpentMinutes?: true
    lastAccessed?: true
    modulesCompleted?: true
    totalModules?: true
    notes?: true
    bookmarks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type User_progressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_progress to aggregate.
     */
    where?: user_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_progresses to fetch.
     */
    orderBy?: user_progressOrderByWithRelationInput | user_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_progresses
    **/
    _count?: true | User_progressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_progressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_progressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_progressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_progressMaxAggregateInputType
  }

  export type GetUser_progressAggregateType<T extends User_progressAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_progress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_progress[P]>
      : GetScalarType<T[P], AggregateUser_progress[P]>
  }




  export type user_progressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_progressWhereInput
    orderBy?: user_progressOrderByWithAggregationInput | user_progressOrderByWithAggregationInput[]
    by: User_progressScalarFieldEnum[] | User_progressScalarFieldEnum
    having?: user_progressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_progressCountAggregateInputType | true
    _avg?: User_progressAvgAggregateInputType
    _sum?: User_progressSumAggregateInputType
    _min?: User_progressMinAggregateInputType
    _max?: User_progressMaxAggregateInputType
  }

  export type User_progressGroupByOutputType = {
    id: string
    userId: string
    enrollmentId: string
    progressPercent: number
    timeSpentMinutes: number
    lastAccessed: Date
    modulesCompleted: number
    totalModules: number
    notes: string | null
    bookmarks: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: User_progressCountAggregateOutputType | null
    _avg: User_progressAvgAggregateOutputType | null
    _sum: User_progressSumAggregateOutputType | null
    _min: User_progressMinAggregateOutputType | null
    _max: User_progressMaxAggregateOutputType | null
  }

  type GetUser_progressGroupByPayload<T extends user_progressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_progressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_progressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_progressGroupByOutputType[P]>
            : GetScalarType<T[P], User_progressGroupByOutputType[P]>
        }
      >
    >


  export type user_progressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    enrollmentId?: boolean
    progressPercent?: boolean
    timeSpentMinutes?: boolean
    lastAccessed?: boolean
    modulesCompleted?: boolean
    totalModules?: boolean
    notes?: boolean
    bookmarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course_enrollments?: boolean | course_enrollmentsDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_progress"]>

  export type user_progressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    enrollmentId?: boolean
    progressPercent?: boolean
    timeSpentMinutes?: boolean
    lastAccessed?: boolean
    modulesCompleted?: boolean
    totalModules?: boolean
    notes?: boolean
    bookmarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course_enrollments?: boolean | course_enrollmentsDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_progress"]>

  export type user_progressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    enrollmentId?: boolean
    progressPercent?: boolean
    timeSpentMinutes?: boolean
    lastAccessed?: boolean
    modulesCompleted?: boolean
    totalModules?: boolean
    notes?: boolean
    bookmarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course_enrollments?: boolean | course_enrollmentsDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_progress"]>

  export type user_progressSelectScalar = {
    id?: boolean
    userId?: boolean
    enrollmentId?: boolean
    progressPercent?: boolean
    timeSpentMinutes?: boolean
    lastAccessed?: boolean
    modulesCompleted?: boolean
    totalModules?: boolean
    notes?: boolean
    bookmarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type user_progressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "enrollmentId" | "progressPercent" | "timeSpentMinutes" | "lastAccessed" | "modulesCompleted" | "totalModules" | "notes" | "bookmarks" | "createdAt" | "updatedAt", ExtArgs["result"]["user_progress"]>
  export type user_progressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course_enrollments?: boolean | course_enrollmentsDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type user_progressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course_enrollments?: boolean | course_enrollmentsDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type user_progressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course_enrollments?: boolean | course_enrollmentsDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $user_progressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_progress"
    objects: {
      course_enrollments: Prisma.$course_enrollmentsPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      enrollmentId: string
      progressPercent: number
      timeSpentMinutes: number
      lastAccessed: Date
      modulesCompleted: number
      totalModules: number
      notes: string | null
      bookmarks: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user_progress"]>
    composites: {}
  }

  type user_progressGetPayload<S extends boolean | null | undefined | user_progressDefaultArgs> = $Result.GetResult<Prisma.$user_progressPayload, S>

  type user_progressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_progressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_progressCountAggregateInputType | true
    }

  export interface user_progressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_progress'], meta: { name: 'user_progress' } }
    /**
     * Find zero or one User_progress that matches the filter.
     * @param {user_progressFindUniqueArgs} args - Arguments to find a User_progress
     * @example
     * // Get one User_progress
     * const user_progress = await prisma.user_progress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_progressFindUniqueArgs>(args: SelectSubset<T, user_progressFindUniqueArgs<ExtArgs>>): Prisma__user_progressClient<$Result.GetResult<Prisma.$user_progressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_progress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_progressFindUniqueOrThrowArgs} args - Arguments to find a User_progress
     * @example
     * // Get one User_progress
     * const user_progress = await prisma.user_progress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_progressFindUniqueOrThrowArgs>(args: SelectSubset<T, user_progressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_progressClient<$Result.GetResult<Prisma.$user_progressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_progress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_progressFindFirstArgs} args - Arguments to find a User_progress
     * @example
     * // Get one User_progress
     * const user_progress = await prisma.user_progress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_progressFindFirstArgs>(args?: SelectSubset<T, user_progressFindFirstArgs<ExtArgs>>): Prisma__user_progressClient<$Result.GetResult<Prisma.$user_progressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_progress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_progressFindFirstOrThrowArgs} args - Arguments to find a User_progress
     * @example
     * // Get one User_progress
     * const user_progress = await prisma.user_progress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_progressFindFirstOrThrowArgs>(args?: SelectSubset<T, user_progressFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_progressClient<$Result.GetResult<Prisma.$user_progressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_progresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_progressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_progresses
     * const user_progresses = await prisma.user_progress.findMany()
     * 
     * // Get first 10 User_progresses
     * const user_progresses = await prisma.user_progress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_progressWithIdOnly = await prisma.user_progress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_progressFindManyArgs>(args?: SelectSubset<T, user_progressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_progressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_progress.
     * @param {user_progressCreateArgs} args - Arguments to create a User_progress.
     * @example
     * // Create one User_progress
     * const User_progress = await prisma.user_progress.create({
     *   data: {
     *     // ... data to create a User_progress
     *   }
     * })
     * 
     */
    create<T extends user_progressCreateArgs>(args: SelectSubset<T, user_progressCreateArgs<ExtArgs>>): Prisma__user_progressClient<$Result.GetResult<Prisma.$user_progressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_progresses.
     * @param {user_progressCreateManyArgs} args - Arguments to create many User_progresses.
     * @example
     * // Create many User_progresses
     * const user_progress = await prisma.user_progress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_progressCreateManyArgs>(args?: SelectSubset<T, user_progressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_progresses and returns the data saved in the database.
     * @param {user_progressCreateManyAndReturnArgs} args - Arguments to create many User_progresses.
     * @example
     * // Create many User_progresses
     * const user_progress = await prisma.user_progress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_progresses and only return the `id`
     * const user_progressWithIdOnly = await prisma.user_progress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_progressCreateManyAndReturnArgs>(args?: SelectSubset<T, user_progressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_progressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_progress.
     * @param {user_progressDeleteArgs} args - Arguments to delete one User_progress.
     * @example
     * // Delete one User_progress
     * const User_progress = await prisma.user_progress.delete({
     *   where: {
     *     // ... filter to delete one User_progress
     *   }
     * })
     * 
     */
    delete<T extends user_progressDeleteArgs>(args: SelectSubset<T, user_progressDeleteArgs<ExtArgs>>): Prisma__user_progressClient<$Result.GetResult<Prisma.$user_progressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_progress.
     * @param {user_progressUpdateArgs} args - Arguments to update one User_progress.
     * @example
     * // Update one User_progress
     * const user_progress = await prisma.user_progress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_progressUpdateArgs>(args: SelectSubset<T, user_progressUpdateArgs<ExtArgs>>): Prisma__user_progressClient<$Result.GetResult<Prisma.$user_progressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_progresses.
     * @param {user_progressDeleteManyArgs} args - Arguments to filter User_progresses to delete.
     * @example
     * // Delete a few User_progresses
     * const { count } = await prisma.user_progress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_progressDeleteManyArgs>(args?: SelectSubset<T, user_progressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_progressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_progresses
     * const user_progress = await prisma.user_progress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_progressUpdateManyArgs>(args: SelectSubset<T, user_progressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_progresses and returns the data updated in the database.
     * @param {user_progressUpdateManyAndReturnArgs} args - Arguments to update many User_progresses.
     * @example
     * // Update many User_progresses
     * const user_progress = await prisma.user_progress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_progresses and only return the `id`
     * const user_progressWithIdOnly = await prisma.user_progress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_progressUpdateManyAndReturnArgs>(args: SelectSubset<T, user_progressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_progressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_progress.
     * @param {user_progressUpsertArgs} args - Arguments to update or create a User_progress.
     * @example
     * // Update or create a User_progress
     * const user_progress = await prisma.user_progress.upsert({
     *   create: {
     *     // ... data to create a User_progress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_progress we want to update
     *   }
     * })
     */
    upsert<T extends user_progressUpsertArgs>(args: SelectSubset<T, user_progressUpsertArgs<ExtArgs>>): Prisma__user_progressClient<$Result.GetResult<Prisma.$user_progressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_progresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_progressCountArgs} args - Arguments to filter User_progresses to count.
     * @example
     * // Count the number of User_progresses
     * const count = await prisma.user_progress.count({
     *   where: {
     *     // ... the filter for the User_progresses we want to count
     *   }
     * })
    **/
    count<T extends user_progressCountArgs>(
      args?: Subset<T, user_progressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_progressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_progressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_progressAggregateArgs>(args: Subset<T, User_progressAggregateArgs>): Prisma.PrismaPromise<GetUser_progressAggregateType<T>>

    /**
     * Group by User_progress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_progressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_progressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_progressGroupByArgs['orderBy'] }
        : { orderBy?: user_progressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_progressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_progressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_progress model
   */
  readonly fields: user_progressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_progress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_progressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course_enrollments<T extends course_enrollmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, course_enrollmentsDefaultArgs<ExtArgs>>): Prisma__course_enrollmentsClient<$Result.GetResult<Prisma.$course_enrollmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_progress model
   */
  interface user_progressFieldRefs {
    readonly id: FieldRef<"user_progress", 'String'>
    readonly userId: FieldRef<"user_progress", 'String'>
    readonly enrollmentId: FieldRef<"user_progress", 'String'>
    readonly progressPercent: FieldRef<"user_progress", 'Int'>
    readonly timeSpentMinutes: FieldRef<"user_progress", 'Int'>
    readonly lastAccessed: FieldRef<"user_progress", 'DateTime'>
    readonly modulesCompleted: FieldRef<"user_progress", 'Int'>
    readonly totalModules: FieldRef<"user_progress", 'Int'>
    readonly notes: FieldRef<"user_progress", 'String'>
    readonly bookmarks: FieldRef<"user_progress", 'Json'>
    readonly createdAt: FieldRef<"user_progress", 'DateTime'>
    readonly updatedAt: FieldRef<"user_progress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_progress findUnique
   */
  export type user_progressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_progress
     */
    select?: user_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_progress
     */
    omit?: user_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_progressInclude<ExtArgs> | null
    /**
     * Filter, which user_progress to fetch.
     */
    where: user_progressWhereUniqueInput
  }

  /**
   * user_progress findUniqueOrThrow
   */
  export type user_progressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_progress
     */
    select?: user_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_progress
     */
    omit?: user_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_progressInclude<ExtArgs> | null
    /**
     * Filter, which user_progress to fetch.
     */
    where: user_progressWhereUniqueInput
  }

  /**
   * user_progress findFirst
   */
  export type user_progressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_progress
     */
    select?: user_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_progress
     */
    omit?: user_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_progressInclude<ExtArgs> | null
    /**
     * Filter, which user_progress to fetch.
     */
    where?: user_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_progresses to fetch.
     */
    orderBy?: user_progressOrderByWithRelationInput | user_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_progresses.
     */
    cursor?: user_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_progresses.
     */
    distinct?: User_progressScalarFieldEnum | User_progressScalarFieldEnum[]
  }

  /**
   * user_progress findFirstOrThrow
   */
  export type user_progressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_progress
     */
    select?: user_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_progress
     */
    omit?: user_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_progressInclude<ExtArgs> | null
    /**
     * Filter, which user_progress to fetch.
     */
    where?: user_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_progresses to fetch.
     */
    orderBy?: user_progressOrderByWithRelationInput | user_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_progresses.
     */
    cursor?: user_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_progresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_progresses.
     */
    distinct?: User_progressScalarFieldEnum | User_progressScalarFieldEnum[]
  }

  /**
   * user_progress findMany
   */
  export type user_progressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_progress
     */
    select?: user_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_progress
     */
    omit?: user_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_progressInclude<ExtArgs> | null
    /**
     * Filter, which user_progresses to fetch.
     */
    where?: user_progressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_progresses to fetch.
     */
    orderBy?: user_progressOrderByWithRelationInput | user_progressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_progresses.
     */
    cursor?: user_progressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_progresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_progresses.
     */
    skip?: number
    distinct?: User_progressScalarFieldEnum | User_progressScalarFieldEnum[]
  }

  /**
   * user_progress create
   */
  export type user_progressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_progress
     */
    select?: user_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_progress
     */
    omit?: user_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_progressInclude<ExtArgs> | null
    /**
     * The data needed to create a user_progress.
     */
    data: XOR<user_progressCreateInput, user_progressUncheckedCreateInput>
  }

  /**
   * user_progress createMany
   */
  export type user_progressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_progresses.
     */
    data: user_progressCreateManyInput | user_progressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_progress createManyAndReturn
   */
  export type user_progressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_progress
     */
    select?: user_progressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_progress
     */
    omit?: user_progressOmit<ExtArgs> | null
    /**
     * The data used to create many user_progresses.
     */
    data: user_progressCreateManyInput | user_progressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_progressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_progress update
   */
  export type user_progressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_progress
     */
    select?: user_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_progress
     */
    omit?: user_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_progressInclude<ExtArgs> | null
    /**
     * The data needed to update a user_progress.
     */
    data: XOR<user_progressUpdateInput, user_progressUncheckedUpdateInput>
    /**
     * Choose, which user_progress to update.
     */
    where: user_progressWhereUniqueInput
  }

  /**
   * user_progress updateMany
   */
  export type user_progressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_progresses.
     */
    data: XOR<user_progressUpdateManyMutationInput, user_progressUncheckedUpdateManyInput>
    /**
     * Filter which user_progresses to update
     */
    where?: user_progressWhereInput
    /**
     * Limit how many user_progresses to update.
     */
    limit?: number
  }

  /**
   * user_progress updateManyAndReturn
   */
  export type user_progressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_progress
     */
    select?: user_progressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_progress
     */
    omit?: user_progressOmit<ExtArgs> | null
    /**
     * The data used to update user_progresses.
     */
    data: XOR<user_progressUpdateManyMutationInput, user_progressUncheckedUpdateManyInput>
    /**
     * Filter which user_progresses to update
     */
    where?: user_progressWhereInput
    /**
     * Limit how many user_progresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_progressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_progress upsert
   */
  export type user_progressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_progress
     */
    select?: user_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_progress
     */
    omit?: user_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_progressInclude<ExtArgs> | null
    /**
     * The filter to search for the user_progress to update in case it exists.
     */
    where: user_progressWhereUniqueInput
    /**
     * In case the user_progress found by the `where` argument doesn't exist, create a new user_progress with this data.
     */
    create: XOR<user_progressCreateInput, user_progressUncheckedCreateInput>
    /**
     * In case the user_progress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_progressUpdateInput, user_progressUncheckedUpdateInput>
  }

  /**
   * user_progress delete
   */
  export type user_progressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_progress
     */
    select?: user_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_progress
     */
    omit?: user_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_progressInclude<ExtArgs> | null
    /**
     * Filter which user_progress to delete.
     */
    where: user_progressWhereUniqueInput
  }

  /**
   * user_progress deleteMany
   */
  export type user_progressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_progresses to delete
     */
    where?: user_progressWhereInput
    /**
     * Limit how many user_progresses to delete.
     */
    limit?: number
  }

  /**
   * user_progress without action
   */
  export type user_progressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_progress
     */
    select?: user_progressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_progress
     */
    omit?: user_progressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_progressInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    certificationId: 'certificationId',
    certificationName: 'certificationName',
    price: 'price',
    logoUrl: 'logoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    provider: 'provider',
    category: 'category',
    examCode: 'examCode'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stripeSessionId: 'stripeSessionId',
    stripePaymentId: 'stripePaymentId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    items: 'items',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    receiptNumber: 'receiptNumber',
    paymentMethod: 'paymentMethod',
    coursesCount: 'coursesCount'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    phone: 'phone',
    language: 'language',
    country: 'country',
    occupation: 'occupation',
    totalspent: 'totalspent',
    coursesowned: 'coursesowned',
    profileImage: 'profileImage',
    city: 'city',
    company: 'company',
    linkedIn: 'linkedIn',
    bio: 'bio',
    lastLoginAt: 'lastLoginAt',
    totalSpent: 'totalSpent',
    coursesOwned: 'coursesOwned'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Course_enrollmentsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    paymentId: 'paymentId',
    certificationName: 'certificationName',
    provider: 'provider',
    price: 'price',
    status: 'status',
    enrolledAt: 'enrolledAt'
  };

  export type Course_enrollmentsScalarFieldEnum = (typeof Course_enrollmentsScalarFieldEnum)[keyof typeof Course_enrollmentsScalarFieldEnum]


  export const AchievementsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    description: 'description',
    certificationId: 'certificationId',
    badgeUrl: 'badgeUrl',
    certificateUrl: 'certificateUrl',
    points: 'points',
    issuedAt: 'issuedAt',
    expiresAt: 'expiresAt',
    verificationCode: 'verificationCode'
  };

  export type AchievementsScalarFieldEnum = (typeof AchievementsScalarFieldEnum)[keyof typeof AchievementsScalarFieldEnum]


  export const User_progressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    enrollmentId: 'enrollmentId',
    progressPercent: 'progressPercent',
    timeSpentMinutes: 'timeSpentMinutes',
    lastAccessed: 'lastAccessed',
    modulesCompleted: 'modulesCompleted',
    totalModules: 'totalModules',
    notes: 'notes',
    bookmarks: 'bookmarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type User_progressScalarFieldEnum = (typeof User_progressScalarFieldEnum)[keyof typeof User_progressScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    
  /**
   * Deep Input Types
   */


  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    id?: StringFilter<"CartItem"> | string
    userId?: StringFilter<"CartItem"> | string
    certificationId?: StringFilter<"CartItem"> | string
    certificationName?: StringFilter<"CartItem"> | string
    price?: FloatFilter<"CartItem"> | number
    logoUrl?: StringNullableFilter<"CartItem"> | string | null
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    provider?: StringNullableFilter<"CartItem"> | string | null
    category?: StringNullableFilter<"CartItem"> | string | null
    examCode?: StringNullableFilter<"CartItem"> | string | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    certificationId?: SortOrder
    certificationName?: SortOrder
    price?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    examCode?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    userId?: StringFilter<"CartItem"> | string
    certificationId?: StringFilter<"CartItem"> | string
    certificationName?: StringFilter<"CartItem"> | string
    price?: FloatFilter<"CartItem"> | number
    logoUrl?: StringNullableFilter<"CartItem"> | string | null
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    provider?: StringNullableFilter<"CartItem"> | string | null
    category?: StringNullableFilter<"CartItem"> | string | null
    examCode?: StringNullableFilter<"CartItem"> | string | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    certificationId?: SortOrder
    certificationName?: SortOrder
    price?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    examCode?: SortOrderInput | SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CartItem"> | string
    userId?: StringWithAggregatesFilter<"CartItem"> | string
    certificationId?: StringWithAggregatesFilter<"CartItem"> | string
    certificationName?: StringWithAggregatesFilter<"CartItem"> | string
    price?: FloatWithAggregatesFilter<"CartItem"> | number
    logoUrl?: StringNullableWithAggregatesFilter<"CartItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CartItem"> | Date | string
    provider?: StringNullableWithAggregatesFilter<"CartItem"> | string | null
    category?: StringNullableWithAggregatesFilter<"CartItem"> | string | null
    examCode?: StringNullableWithAggregatesFilter<"CartItem"> | string | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    stripeSessionId?: StringFilter<"Payment"> | string
    stripePaymentId?: StringNullableFilter<"Payment"> | string | null
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    items?: JsonFilter<"Payment">
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    receiptNumber?: StringNullableFilter<"Payment"> | string | null
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    coursesCount?: IntNullableFilter<"Payment"> | number | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    course_enrollments?: Course_enrollmentsListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    items?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receiptNumber?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    coursesCount?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    course_enrollments?: course_enrollmentsOrderByRelationAggregateInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeSessionId?: string
    receiptNumber?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    stripePaymentId?: StringNullableFilter<"Payment"> | string | null
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    items?: JsonFilter<"Payment">
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    coursesCount?: IntNullableFilter<"Payment"> | number | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    course_enrollments?: Course_enrollmentsListRelationFilter
  }, "id" | "stripeSessionId" | "receiptNumber">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    items?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receiptNumber?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    coursesCount?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    stripeSessionId?: StringWithAggregatesFilter<"Payment"> | string
    stripePaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    items?: JsonWithAggregatesFilter<"Payment">
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    receiptNumber?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paymentMethod?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    coursesCount?: IntNullableWithAggregatesFilter<"Payment"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    language?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    occupation?: StringNullableFilter<"User"> | string | null
    totalspent?: FloatNullableFilter<"User"> | number | null
    coursesowned?: IntNullableFilter<"User"> | number | null
    profileImage?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    company?: StringNullableFilter<"User"> | string | null
    linkedIn?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    totalSpent?: FloatNullableFilter<"User"> | number | null
    coursesOwned?: IntNullableFilter<"User"> | number | null
    CartItem?: CartItemListRelationFilter
    Payment?: PaymentListRelationFilter
    achievements?: AchievementsListRelationFilter
    course_enrollments?: Course_enrollmentsListRelationFilter
    user_progress?: User_progressListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    totalspent?: SortOrderInput | SortOrder
    coursesowned?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    linkedIn?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    totalSpent?: SortOrderInput | SortOrder
    coursesOwned?: SortOrderInput | SortOrder
    CartItem?: CartItemOrderByRelationAggregateInput
    Payment?: PaymentOrderByRelationAggregateInput
    achievements?: achievementsOrderByRelationAggregateInput
    course_enrollments?: course_enrollmentsOrderByRelationAggregateInput
    user_progress?: user_progressOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    language?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    occupation?: StringNullableFilter<"User"> | string | null
    totalspent?: FloatNullableFilter<"User"> | number | null
    coursesowned?: IntNullableFilter<"User"> | number | null
    profileImage?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    company?: StringNullableFilter<"User"> | string | null
    linkedIn?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    totalSpent?: FloatNullableFilter<"User"> | number | null
    coursesOwned?: IntNullableFilter<"User"> | number | null
    CartItem?: CartItemListRelationFilter
    Payment?: PaymentListRelationFilter
    achievements?: AchievementsListRelationFilter
    course_enrollments?: Course_enrollmentsListRelationFilter
    user_progress?: User_progressListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    totalspent?: SortOrderInput | SortOrder
    coursesowned?: SortOrderInput | SortOrder
    profileImage?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    linkedIn?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    totalSpent?: SortOrderInput | SortOrder
    coursesOwned?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    language?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    occupation?: StringNullableWithAggregatesFilter<"User"> | string | null
    totalspent?: FloatNullableWithAggregatesFilter<"User"> | number | null
    coursesowned?: IntNullableWithAggregatesFilter<"User"> | number | null
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    company?: StringNullableWithAggregatesFilter<"User"> | string | null
    linkedIn?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    totalSpent?: FloatNullableWithAggregatesFilter<"User"> | number | null
    coursesOwned?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type course_enrollmentsWhereInput = {
    AND?: course_enrollmentsWhereInput | course_enrollmentsWhereInput[]
    OR?: course_enrollmentsWhereInput[]
    NOT?: course_enrollmentsWhereInput | course_enrollmentsWhereInput[]
    id?: StringFilter<"course_enrollments"> | string
    userId?: StringFilter<"course_enrollments"> | string
    paymentId?: StringFilter<"course_enrollments"> | string
    certificationName?: StringFilter<"course_enrollments"> | string
    provider?: StringFilter<"course_enrollments"> | string
    price?: FloatFilter<"course_enrollments"> | number
    status?: StringNullableFilter<"course_enrollments"> | string | null
    enrolledAt?: DateTimeNullableFilter<"course_enrollments"> | Date | string | null
    Payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    user_progress?: User_progressListRelationFilter
  }

  export type course_enrollmentsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    certificationName?: SortOrder
    provider?: SortOrder
    price?: SortOrder
    status?: SortOrderInput | SortOrder
    enrolledAt?: SortOrderInput | SortOrder
    Payment?: PaymentOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    user_progress?: user_progressOrderByRelationAggregateInput
  }

  export type course_enrollmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: course_enrollmentsWhereInput | course_enrollmentsWhereInput[]
    OR?: course_enrollmentsWhereInput[]
    NOT?: course_enrollmentsWhereInput | course_enrollmentsWhereInput[]
    userId?: StringFilter<"course_enrollments"> | string
    paymentId?: StringFilter<"course_enrollments"> | string
    certificationName?: StringFilter<"course_enrollments"> | string
    provider?: StringFilter<"course_enrollments"> | string
    price?: FloatFilter<"course_enrollments"> | number
    status?: StringNullableFilter<"course_enrollments"> | string | null
    enrolledAt?: DateTimeNullableFilter<"course_enrollments"> | Date | string | null
    Payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    user_progress?: User_progressListRelationFilter
  }, "id">

  export type course_enrollmentsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    certificationName?: SortOrder
    provider?: SortOrder
    price?: SortOrder
    status?: SortOrderInput | SortOrder
    enrolledAt?: SortOrderInput | SortOrder
    _count?: course_enrollmentsCountOrderByAggregateInput
    _avg?: course_enrollmentsAvgOrderByAggregateInput
    _max?: course_enrollmentsMaxOrderByAggregateInput
    _min?: course_enrollmentsMinOrderByAggregateInput
    _sum?: course_enrollmentsSumOrderByAggregateInput
  }

  export type course_enrollmentsScalarWhereWithAggregatesInput = {
    AND?: course_enrollmentsScalarWhereWithAggregatesInput | course_enrollmentsScalarWhereWithAggregatesInput[]
    OR?: course_enrollmentsScalarWhereWithAggregatesInput[]
    NOT?: course_enrollmentsScalarWhereWithAggregatesInput | course_enrollmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"course_enrollments"> | string
    userId?: StringWithAggregatesFilter<"course_enrollments"> | string
    paymentId?: StringWithAggregatesFilter<"course_enrollments"> | string
    certificationName?: StringWithAggregatesFilter<"course_enrollments"> | string
    provider?: StringWithAggregatesFilter<"course_enrollments"> | string
    price?: FloatWithAggregatesFilter<"course_enrollments"> | number
    status?: StringNullableWithAggregatesFilter<"course_enrollments"> | string | null
    enrolledAt?: DateTimeNullableWithAggregatesFilter<"course_enrollments"> | Date | string | null
  }

  export type achievementsWhereInput = {
    AND?: achievementsWhereInput | achievementsWhereInput[]
    OR?: achievementsWhereInput[]
    NOT?: achievementsWhereInput | achievementsWhereInput[]
    id?: StringFilter<"achievements"> | string
    userId?: StringFilter<"achievements"> | string
    type?: StringFilter<"achievements"> | string
    title?: StringFilter<"achievements"> | string
    description?: StringFilter<"achievements"> | string
    certificationId?: StringNullableFilter<"achievements"> | string | null
    badgeUrl?: StringNullableFilter<"achievements"> | string | null
    certificateUrl?: StringNullableFilter<"achievements"> | string | null
    points?: IntFilter<"achievements"> | number
    issuedAt?: DateTimeFilter<"achievements"> | Date | string
    expiresAt?: DateTimeNullableFilter<"achievements"> | Date | string | null
    verificationCode?: StringNullableFilter<"achievements"> | string | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type achievementsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    certificationId?: SortOrderInput | SortOrder
    badgeUrl?: SortOrderInput | SortOrder
    certificateUrl?: SortOrderInput | SortOrder
    points?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    verificationCode?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type achievementsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    verificationCode?: string
    AND?: achievementsWhereInput | achievementsWhereInput[]
    OR?: achievementsWhereInput[]
    NOT?: achievementsWhereInput | achievementsWhereInput[]
    userId?: StringFilter<"achievements"> | string
    type?: StringFilter<"achievements"> | string
    title?: StringFilter<"achievements"> | string
    description?: StringFilter<"achievements"> | string
    certificationId?: StringNullableFilter<"achievements"> | string | null
    badgeUrl?: StringNullableFilter<"achievements"> | string | null
    certificateUrl?: StringNullableFilter<"achievements"> | string | null
    points?: IntFilter<"achievements"> | number
    issuedAt?: DateTimeFilter<"achievements"> | Date | string
    expiresAt?: DateTimeNullableFilter<"achievements"> | Date | string | null
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "verificationCode">

  export type achievementsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    certificationId?: SortOrderInput | SortOrder
    badgeUrl?: SortOrderInput | SortOrder
    certificateUrl?: SortOrderInput | SortOrder
    points?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    verificationCode?: SortOrderInput | SortOrder
    _count?: achievementsCountOrderByAggregateInput
    _avg?: achievementsAvgOrderByAggregateInput
    _max?: achievementsMaxOrderByAggregateInput
    _min?: achievementsMinOrderByAggregateInput
    _sum?: achievementsSumOrderByAggregateInput
  }

  export type achievementsScalarWhereWithAggregatesInput = {
    AND?: achievementsScalarWhereWithAggregatesInput | achievementsScalarWhereWithAggregatesInput[]
    OR?: achievementsScalarWhereWithAggregatesInput[]
    NOT?: achievementsScalarWhereWithAggregatesInput | achievementsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"achievements"> | string
    userId?: StringWithAggregatesFilter<"achievements"> | string
    type?: StringWithAggregatesFilter<"achievements"> | string
    title?: StringWithAggregatesFilter<"achievements"> | string
    description?: StringWithAggregatesFilter<"achievements"> | string
    certificationId?: StringNullableWithAggregatesFilter<"achievements"> | string | null
    badgeUrl?: StringNullableWithAggregatesFilter<"achievements"> | string | null
    certificateUrl?: StringNullableWithAggregatesFilter<"achievements"> | string | null
    points?: IntWithAggregatesFilter<"achievements"> | number
    issuedAt?: DateTimeWithAggregatesFilter<"achievements"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"achievements"> | Date | string | null
    verificationCode?: StringNullableWithAggregatesFilter<"achievements"> | string | null
  }

  export type user_progressWhereInput = {
    AND?: user_progressWhereInput | user_progressWhereInput[]
    OR?: user_progressWhereInput[]
    NOT?: user_progressWhereInput | user_progressWhereInput[]
    id?: StringFilter<"user_progress"> | string
    userId?: StringFilter<"user_progress"> | string
    enrollmentId?: StringFilter<"user_progress"> | string
    progressPercent?: IntFilter<"user_progress"> | number
    timeSpentMinutes?: IntFilter<"user_progress"> | number
    lastAccessed?: DateTimeFilter<"user_progress"> | Date | string
    modulesCompleted?: IntFilter<"user_progress"> | number
    totalModules?: IntFilter<"user_progress"> | number
    notes?: StringNullableFilter<"user_progress"> | string | null
    bookmarks?: JsonNullableFilter<"user_progress">
    createdAt?: DateTimeFilter<"user_progress"> | Date | string
    updatedAt?: DateTimeFilter<"user_progress"> | Date | string
    course_enrollments?: XOR<Course_enrollmentsScalarRelationFilter, course_enrollmentsWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type user_progressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    enrollmentId?: SortOrder
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    lastAccessed?: SortOrder
    modulesCompleted?: SortOrder
    totalModules?: SortOrder
    notes?: SortOrderInput | SortOrder
    bookmarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course_enrollments?: course_enrollmentsOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type user_progressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_enrollmentId?: user_progressUserIdEnrollmentIdCompoundUniqueInput
    AND?: user_progressWhereInput | user_progressWhereInput[]
    OR?: user_progressWhereInput[]
    NOT?: user_progressWhereInput | user_progressWhereInput[]
    userId?: StringFilter<"user_progress"> | string
    enrollmentId?: StringFilter<"user_progress"> | string
    progressPercent?: IntFilter<"user_progress"> | number
    timeSpentMinutes?: IntFilter<"user_progress"> | number
    lastAccessed?: DateTimeFilter<"user_progress"> | Date | string
    modulesCompleted?: IntFilter<"user_progress"> | number
    totalModules?: IntFilter<"user_progress"> | number
    notes?: StringNullableFilter<"user_progress"> | string | null
    bookmarks?: JsonNullableFilter<"user_progress">
    createdAt?: DateTimeFilter<"user_progress"> | Date | string
    updatedAt?: DateTimeFilter<"user_progress"> | Date | string
    course_enrollments?: XOR<Course_enrollmentsScalarRelationFilter, course_enrollmentsWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_enrollmentId">

  export type user_progressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    enrollmentId?: SortOrder
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    lastAccessed?: SortOrder
    modulesCompleted?: SortOrder
    totalModules?: SortOrder
    notes?: SortOrderInput | SortOrder
    bookmarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: user_progressCountOrderByAggregateInput
    _avg?: user_progressAvgOrderByAggregateInput
    _max?: user_progressMaxOrderByAggregateInput
    _min?: user_progressMinOrderByAggregateInput
    _sum?: user_progressSumOrderByAggregateInput
  }

  export type user_progressScalarWhereWithAggregatesInput = {
    AND?: user_progressScalarWhereWithAggregatesInput | user_progressScalarWhereWithAggregatesInput[]
    OR?: user_progressScalarWhereWithAggregatesInput[]
    NOT?: user_progressScalarWhereWithAggregatesInput | user_progressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_progress"> | string
    userId?: StringWithAggregatesFilter<"user_progress"> | string
    enrollmentId?: StringWithAggregatesFilter<"user_progress"> | string
    progressPercent?: IntWithAggregatesFilter<"user_progress"> | number
    timeSpentMinutes?: IntWithAggregatesFilter<"user_progress"> | number
    lastAccessed?: DateTimeWithAggregatesFilter<"user_progress"> | Date | string
    modulesCompleted?: IntWithAggregatesFilter<"user_progress"> | number
    totalModules?: IntWithAggregatesFilter<"user_progress"> | number
    notes?: StringNullableWithAggregatesFilter<"user_progress"> | string | null
    bookmarks?: JsonNullableWithAggregatesFilter<"user_progress">
    createdAt?: DateTimeWithAggregatesFilter<"user_progress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user_progress"> | Date | string
  }

  export type CartItemCreateInput = {
    id: string
    certificationId: string
    certificationName: string
    price: number
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    provider?: string | null
    category?: string | null
    examCode?: string | null
    User: UserCreateNestedOneWithoutCartItemInput
  }

  export type CartItemUncheckedCreateInput = {
    id: string
    userId: string
    certificationId: string
    certificationName: string
    price: number
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    provider?: string | null
    category?: string | null
    examCode?: string | null
  }

  export type CartItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificationId?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    examCode?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutCartItemNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    certificationId?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    examCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartItemCreateManyInput = {
    id: string
    userId: string
    certificationId: string
    certificationName: string
    price: number
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    provider?: string | null
    category?: string | null
    examCode?: string | null
  }

  export type CartItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificationId?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    examCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    certificationId?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    examCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentCreateInput = {
    id: string
    stripeSessionId: string
    stripePaymentId?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
    receiptNumber?: string | null
    paymentMethod?: string | null
    coursesCount?: number | null
    User: UserCreateNestedOneWithoutPaymentInput
    course_enrollments?: course_enrollmentsCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id: string
    userId: string
    stripeSessionId: string
    stripePaymentId?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
    receiptNumber?: string | null
    paymentMethod?: string | null
    coursesCount?: number | null
    course_enrollments?: course_enrollmentsUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    coursesCount?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUpdateOneRequiredWithoutPaymentNestedInput
    course_enrollments?: course_enrollmentsUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    coursesCount?: NullableIntFieldUpdateOperationsInput | number | null
    course_enrollments?: course_enrollmentsUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id: string
    userId: string
    stripeSessionId: string
    stripePaymentId?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
    receiptNumber?: string | null
    paymentMethod?: string | null
    coursesCount?: number | null
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    coursesCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    coursesCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt: Date | string
    role?: $Enums.Role
    phone?: string | null
    language?: string | null
    country?: string | null
    occupation?: string | null
    totalspent?: number | null
    coursesowned?: number | null
    profileImage?: string | null
    city?: string | null
    company?: string | null
    linkedIn?: string | null
    bio?: string | null
    lastLoginAt?: Date | string | null
    totalSpent?: number | null
    coursesOwned?: number | null
    CartItem?: CartItemCreateNestedManyWithoutUserInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
    achievements?: achievementsCreateNestedManyWithoutUserInput
    course_enrollments?: course_enrollmentsCreateNestedManyWithoutUserInput
    user_progress?: user_progressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt: Date | string
    role?: $Enums.Role
    phone?: string | null
    language?: string | null
    country?: string | null
    occupation?: string | null
    totalspent?: number | null
    coursesowned?: number | null
    profileImage?: string | null
    city?: string | null
    company?: string | null
    linkedIn?: string | null
    bio?: string | null
    lastLoginAt?: Date | string | null
    totalSpent?: number | null
    coursesOwned?: number | null
    CartItem?: CartItemUncheckedCreateNestedManyWithoutUserInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    achievements?: achievementsUncheckedCreateNestedManyWithoutUserInput
    course_enrollments?: course_enrollmentsUncheckedCreateNestedManyWithoutUserInput
    user_progress?: user_progressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    totalspent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesowned?: NullableIntFieldUpdateOperationsInput | number | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesOwned?: NullableIntFieldUpdateOperationsInput | number | null
    CartItem?: CartItemUpdateManyWithoutUserNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
    achievements?: achievementsUpdateManyWithoutUserNestedInput
    course_enrollments?: course_enrollmentsUpdateManyWithoutUserNestedInput
    user_progress?: user_progressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    totalspent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesowned?: NullableIntFieldUpdateOperationsInput | number | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesOwned?: NullableIntFieldUpdateOperationsInput | number | null
    CartItem?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    achievements?: achievementsUncheckedUpdateManyWithoutUserNestedInput
    course_enrollments?: course_enrollmentsUncheckedUpdateManyWithoutUserNestedInput
    user_progress?: user_progressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt: Date | string
    role?: $Enums.Role
    phone?: string | null
    language?: string | null
    country?: string | null
    occupation?: string | null
    totalspent?: number | null
    coursesowned?: number | null
    profileImage?: string | null
    city?: string | null
    company?: string | null
    linkedIn?: string | null
    bio?: string | null
    lastLoginAt?: Date | string | null
    totalSpent?: number | null
    coursesOwned?: number | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    totalspent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesowned?: NullableIntFieldUpdateOperationsInput | number | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesOwned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    totalspent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesowned?: NullableIntFieldUpdateOperationsInput | number | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesOwned?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type course_enrollmentsCreateInput = {
    id?: string
    certificationName: string
    provider: string
    price: number
    status?: string | null
    enrolledAt?: Date | string | null
    Payment: PaymentCreateNestedOneWithoutCourse_enrollmentsInput
    User: UserCreateNestedOneWithoutCourse_enrollmentsInput
    user_progress?: user_progressCreateNestedManyWithoutCourse_enrollmentsInput
  }

  export type course_enrollmentsUncheckedCreateInput = {
    id?: string
    userId: string
    paymentId: string
    certificationName: string
    provider: string
    price: number
    status?: string | null
    enrolledAt?: Date | string | null
    user_progress?: user_progressUncheckedCreateNestedManyWithoutCourse_enrollmentsInput
  }

  export type course_enrollmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Payment?: PaymentUpdateOneRequiredWithoutCourse_enrollmentsNestedInput
    User?: UserUpdateOneRequiredWithoutCourse_enrollmentsNestedInput
    user_progress?: user_progressUpdateManyWithoutCourse_enrollmentsNestedInput
  }

  export type course_enrollmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_progress?: user_progressUncheckedUpdateManyWithoutCourse_enrollmentsNestedInput
  }

  export type course_enrollmentsCreateManyInput = {
    id?: string
    userId: string
    paymentId: string
    certificationName: string
    provider: string
    price: number
    status?: string | null
    enrolledAt?: Date | string | null
  }

  export type course_enrollmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type course_enrollmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type achievementsCreateInput = {
    id: string
    type: string
    title: string
    description: string
    certificationId?: string | null
    badgeUrl?: string | null
    certificateUrl?: string | null
    points?: number
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    verificationCode?: string | null
    User: UserCreateNestedOneWithoutAchievementsInput
  }

  export type achievementsUncheckedCreateInput = {
    id: string
    userId: string
    type: string
    title: string
    description: string
    certificationId?: string | null
    badgeUrl?: string | null
    certificateUrl?: string | null
    points?: number
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    verificationCode?: string | null
  }

  export type achievementsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certificationId?: NullableStringFieldUpdateOperationsInput | string | null
    badgeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutAchievementsNestedInput
  }

  export type achievementsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certificationId?: NullableStringFieldUpdateOperationsInput | string | null
    badgeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type achievementsCreateManyInput = {
    id: string
    userId: string
    type: string
    title: string
    description: string
    certificationId?: string | null
    badgeUrl?: string | null
    certificateUrl?: string | null
    points?: number
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    verificationCode?: string | null
  }

  export type achievementsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certificationId?: NullableStringFieldUpdateOperationsInput | string | null
    badgeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type achievementsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certificationId?: NullableStringFieldUpdateOperationsInput | string | null
    badgeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_progressCreateInput = {
    id: string
    progressPercent?: number
    timeSpentMinutes?: number
    lastAccessed?: Date | string
    modulesCompleted?: number
    totalModules?: number
    notes?: string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
    course_enrollments: course_enrollmentsCreateNestedOneWithoutUser_progressInput
    User: UserCreateNestedOneWithoutUser_progressInput
  }

  export type user_progressUncheckedCreateInput = {
    id: string
    userId: string
    enrollmentId: string
    progressPercent?: number
    timeSpentMinutes?: number
    lastAccessed?: Date | string
    modulesCompleted?: number
    totalModules?: number
    notes?: string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type user_progressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressPercent?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    modulesCompleted?: IntFieldUpdateOperationsInput | number
    totalModules?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course_enrollments?: course_enrollmentsUpdateOneRequiredWithoutUser_progressNestedInput
    User?: UserUpdateOneRequiredWithoutUser_progressNestedInput
  }

  export type user_progressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    enrollmentId?: StringFieldUpdateOperationsInput | string
    progressPercent?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    modulesCompleted?: IntFieldUpdateOperationsInput | number
    totalModules?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_progressCreateManyInput = {
    id: string
    userId: string
    enrollmentId: string
    progressPercent?: number
    timeSpentMinutes?: number
    lastAccessed?: Date | string
    modulesCompleted?: number
    totalModules?: number
    notes?: string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type user_progressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressPercent?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    modulesCompleted?: IntFieldUpdateOperationsInput | number
    totalModules?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_progressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    enrollmentId?: StringFieldUpdateOperationsInput | string
    progressPercent?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    modulesCompleted?: IntFieldUpdateOperationsInput | number
    totalModules?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    certificationId?: SortOrder
    certificationName?: SortOrder
    price?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    category?: SortOrder
    examCode?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    certificationId?: SortOrder
    certificationName?: SortOrder
    price?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    category?: SortOrder
    examCode?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    certificationId?: SortOrder
    certificationName?: SortOrder
    price?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: SortOrder
    category?: SortOrder
    examCode?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Course_enrollmentsListRelationFilter = {
    every?: course_enrollmentsWhereInput
    some?: course_enrollmentsWhereInput
    none?: course_enrollmentsWhereInput
  }

  export type course_enrollmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    items?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receiptNumber?: SortOrder
    paymentMethod?: SortOrder
    coursesCount?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    coursesCount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receiptNumber?: SortOrder
    paymentMethod?: SortOrder
    coursesCount?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    receiptNumber?: SortOrder
    paymentMethod?: SortOrder
    coursesCount?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    coursesCount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type AchievementsListRelationFilter = {
    every?: achievementsWhereInput
    some?: achievementsWhereInput
    none?: achievementsWhereInput
  }

  export type User_progressListRelationFilter = {
    every?: user_progressWhereInput
    some?: user_progressWhereInput
    none?: user_progressWhereInput
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type achievementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_progressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    language?: SortOrder
    country?: SortOrder
    occupation?: SortOrder
    totalspent?: SortOrder
    coursesowned?: SortOrder
    profileImage?: SortOrder
    city?: SortOrder
    company?: SortOrder
    linkedIn?: SortOrder
    bio?: SortOrder
    lastLoginAt?: SortOrder
    totalSpent?: SortOrder
    coursesOwned?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    totalspent?: SortOrder
    coursesowned?: SortOrder
    totalSpent?: SortOrder
    coursesOwned?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    language?: SortOrder
    country?: SortOrder
    occupation?: SortOrder
    totalspent?: SortOrder
    coursesowned?: SortOrder
    profileImage?: SortOrder
    city?: SortOrder
    company?: SortOrder
    linkedIn?: SortOrder
    bio?: SortOrder
    lastLoginAt?: SortOrder
    totalSpent?: SortOrder
    coursesOwned?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    language?: SortOrder
    country?: SortOrder
    occupation?: SortOrder
    totalspent?: SortOrder
    coursesowned?: SortOrder
    profileImage?: SortOrder
    city?: SortOrder
    company?: SortOrder
    linkedIn?: SortOrder
    bio?: SortOrder
    lastLoginAt?: SortOrder
    totalSpent?: SortOrder
    coursesOwned?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    totalspent?: SortOrder
    coursesowned?: SortOrder
    totalSpent?: SortOrder
    coursesOwned?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PaymentScalarRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type course_enrollmentsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    certificationName?: SortOrder
    provider?: SortOrder
    price?: SortOrder
    status?: SortOrder
    enrolledAt?: SortOrder
  }

  export type course_enrollmentsAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type course_enrollmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    certificationName?: SortOrder
    provider?: SortOrder
    price?: SortOrder
    status?: SortOrder
    enrolledAt?: SortOrder
  }

  export type course_enrollmentsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    certificationName?: SortOrder
    provider?: SortOrder
    price?: SortOrder
    status?: SortOrder
    enrolledAt?: SortOrder
  }

  export type course_enrollmentsSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type achievementsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    certificationId?: SortOrder
    badgeUrl?: SortOrder
    certificateUrl?: SortOrder
    points?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    verificationCode?: SortOrder
  }

  export type achievementsAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type achievementsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    certificationId?: SortOrder
    badgeUrl?: SortOrder
    certificateUrl?: SortOrder
    points?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    verificationCode?: SortOrder
  }

  export type achievementsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    certificationId?: SortOrder
    badgeUrl?: SortOrder
    certificateUrl?: SortOrder
    points?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    verificationCode?: SortOrder
  }

  export type achievementsSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type Course_enrollmentsScalarRelationFilter = {
    is?: course_enrollmentsWhereInput
    isNot?: course_enrollmentsWhereInput
  }

  export type user_progressUserIdEnrollmentIdCompoundUniqueInput = {
    userId: string
    enrollmentId: string
  }

  export type user_progressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    enrollmentId?: SortOrder
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    lastAccessed?: SortOrder
    modulesCompleted?: SortOrder
    totalModules?: SortOrder
    notes?: SortOrder
    bookmarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type user_progressAvgOrderByAggregateInput = {
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    modulesCompleted?: SortOrder
    totalModules?: SortOrder
  }

  export type user_progressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    enrollmentId?: SortOrder
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    lastAccessed?: SortOrder
    modulesCompleted?: SortOrder
    totalModules?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type user_progressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    enrollmentId?: SortOrder
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    lastAccessed?: SortOrder
    modulesCompleted?: SortOrder
    totalModules?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type user_progressSumOrderByAggregateInput = {
    progressPercent?: SortOrder
    timeSpentMinutes?: SortOrder
    modulesCompleted?: SortOrder
    totalModules?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutCartItemInput = {
    create?: XOR<UserCreateWithoutCartItemInput, UserUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartItemInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutCartItemNestedInput = {
    create?: XOR<UserCreateWithoutCartItemInput, UserUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartItemInput
    upsert?: UserUpsertWithoutCartItemInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartItemInput, UserUpdateWithoutCartItemInput>, UserUncheckedUpdateWithoutCartItemInput>
  }

  export type UserCreateNestedOneWithoutPaymentInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    connect?: UserWhereUniqueInput
  }

  export type course_enrollmentsCreateNestedManyWithoutPaymentInput = {
    create?: XOR<course_enrollmentsCreateWithoutPaymentInput, course_enrollmentsUncheckedCreateWithoutPaymentInput> | course_enrollmentsCreateWithoutPaymentInput[] | course_enrollmentsUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: course_enrollmentsCreateOrConnectWithoutPaymentInput | course_enrollmentsCreateOrConnectWithoutPaymentInput[]
    createMany?: course_enrollmentsCreateManyPaymentInputEnvelope
    connect?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
  }

  export type course_enrollmentsUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<course_enrollmentsCreateWithoutPaymentInput, course_enrollmentsUncheckedCreateWithoutPaymentInput> | course_enrollmentsCreateWithoutPaymentInput[] | course_enrollmentsUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: course_enrollmentsCreateOrConnectWithoutPaymentInput | course_enrollmentsCreateOrConnectWithoutPaymentInput[]
    createMany?: course_enrollmentsCreateManyPaymentInputEnvelope
    connect?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentInput
    upsert?: UserUpsertWithoutPaymentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentInput, UserUpdateWithoutPaymentInput>, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type course_enrollmentsUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<course_enrollmentsCreateWithoutPaymentInput, course_enrollmentsUncheckedCreateWithoutPaymentInput> | course_enrollmentsCreateWithoutPaymentInput[] | course_enrollmentsUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: course_enrollmentsCreateOrConnectWithoutPaymentInput | course_enrollmentsCreateOrConnectWithoutPaymentInput[]
    upsert?: course_enrollmentsUpsertWithWhereUniqueWithoutPaymentInput | course_enrollmentsUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: course_enrollmentsCreateManyPaymentInputEnvelope
    set?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    disconnect?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    delete?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    connect?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    update?: course_enrollmentsUpdateWithWhereUniqueWithoutPaymentInput | course_enrollmentsUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: course_enrollmentsUpdateManyWithWhereWithoutPaymentInput | course_enrollmentsUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: course_enrollmentsScalarWhereInput | course_enrollmentsScalarWhereInput[]
  }

  export type course_enrollmentsUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<course_enrollmentsCreateWithoutPaymentInput, course_enrollmentsUncheckedCreateWithoutPaymentInput> | course_enrollmentsCreateWithoutPaymentInput[] | course_enrollmentsUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: course_enrollmentsCreateOrConnectWithoutPaymentInput | course_enrollmentsCreateOrConnectWithoutPaymentInput[]
    upsert?: course_enrollmentsUpsertWithWhereUniqueWithoutPaymentInput | course_enrollmentsUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: course_enrollmentsCreateManyPaymentInputEnvelope
    set?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    disconnect?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    delete?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    connect?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    update?: course_enrollmentsUpdateWithWhereUniqueWithoutPaymentInput | course_enrollmentsUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: course_enrollmentsUpdateManyWithWhereWithoutPaymentInput | course_enrollmentsUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: course_enrollmentsScalarWhereInput | course_enrollmentsScalarWhereInput[]
  }

  export type CartItemCreateNestedManyWithoutUserInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type achievementsCreateNestedManyWithoutUserInput = {
    create?: XOR<achievementsCreateWithoutUserInput, achievementsUncheckedCreateWithoutUserInput> | achievementsCreateWithoutUserInput[] | achievementsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: achievementsCreateOrConnectWithoutUserInput | achievementsCreateOrConnectWithoutUserInput[]
    createMany?: achievementsCreateManyUserInputEnvelope
    connect?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
  }

  export type course_enrollmentsCreateNestedManyWithoutUserInput = {
    create?: XOR<course_enrollmentsCreateWithoutUserInput, course_enrollmentsUncheckedCreateWithoutUserInput> | course_enrollmentsCreateWithoutUserInput[] | course_enrollmentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_enrollmentsCreateOrConnectWithoutUserInput | course_enrollmentsCreateOrConnectWithoutUserInput[]
    createMany?: course_enrollmentsCreateManyUserInputEnvelope
    connect?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
  }

  export type user_progressCreateNestedManyWithoutUserInput = {
    create?: XOR<user_progressCreateWithoutUserInput, user_progressUncheckedCreateWithoutUserInput> | user_progressCreateWithoutUserInput[] | user_progressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_progressCreateOrConnectWithoutUserInput | user_progressCreateOrConnectWithoutUserInput[]
    createMany?: user_progressCreateManyUserInputEnvelope
    connect?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type achievementsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<achievementsCreateWithoutUserInput, achievementsUncheckedCreateWithoutUserInput> | achievementsCreateWithoutUserInput[] | achievementsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: achievementsCreateOrConnectWithoutUserInput | achievementsCreateOrConnectWithoutUserInput[]
    createMany?: achievementsCreateManyUserInputEnvelope
    connect?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
  }

  export type course_enrollmentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<course_enrollmentsCreateWithoutUserInput, course_enrollmentsUncheckedCreateWithoutUserInput> | course_enrollmentsCreateWithoutUserInput[] | course_enrollmentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_enrollmentsCreateOrConnectWithoutUserInput | course_enrollmentsCreateOrConnectWithoutUserInput[]
    createMany?: course_enrollmentsCreateManyUserInputEnvelope
    connect?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
  }

  export type user_progressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_progressCreateWithoutUserInput, user_progressUncheckedCreateWithoutUserInput> | user_progressCreateWithoutUserInput[] | user_progressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_progressCreateOrConnectWithoutUserInput | user_progressCreateOrConnectWithoutUserInput[]
    createMany?: user_progressCreateManyUserInputEnvelope
    connect?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CartItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutUserInput | CartItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutUserInput | CartItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutUserInput | CartItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type achievementsUpdateManyWithoutUserNestedInput = {
    create?: XOR<achievementsCreateWithoutUserInput, achievementsUncheckedCreateWithoutUserInput> | achievementsCreateWithoutUserInput[] | achievementsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: achievementsCreateOrConnectWithoutUserInput | achievementsCreateOrConnectWithoutUserInput[]
    upsert?: achievementsUpsertWithWhereUniqueWithoutUserInput | achievementsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: achievementsCreateManyUserInputEnvelope
    set?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    disconnect?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    delete?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    connect?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    update?: achievementsUpdateWithWhereUniqueWithoutUserInput | achievementsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: achievementsUpdateManyWithWhereWithoutUserInput | achievementsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: achievementsScalarWhereInput | achievementsScalarWhereInput[]
  }

  export type course_enrollmentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<course_enrollmentsCreateWithoutUserInput, course_enrollmentsUncheckedCreateWithoutUserInput> | course_enrollmentsCreateWithoutUserInput[] | course_enrollmentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_enrollmentsCreateOrConnectWithoutUserInput | course_enrollmentsCreateOrConnectWithoutUserInput[]
    upsert?: course_enrollmentsUpsertWithWhereUniqueWithoutUserInput | course_enrollmentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: course_enrollmentsCreateManyUserInputEnvelope
    set?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    disconnect?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    delete?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    connect?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    update?: course_enrollmentsUpdateWithWhereUniqueWithoutUserInput | course_enrollmentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: course_enrollmentsUpdateManyWithWhereWithoutUserInput | course_enrollmentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: course_enrollmentsScalarWhereInput | course_enrollmentsScalarWhereInput[]
  }

  export type user_progressUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_progressCreateWithoutUserInput, user_progressUncheckedCreateWithoutUserInput> | user_progressCreateWithoutUserInput[] | user_progressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_progressCreateOrConnectWithoutUserInput | user_progressCreateOrConnectWithoutUserInput[]
    upsert?: user_progressUpsertWithWhereUniqueWithoutUserInput | user_progressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_progressCreateManyUserInputEnvelope
    set?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    disconnect?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    delete?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    connect?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    update?: user_progressUpdateWithWhereUniqueWithoutUserInput | user_progressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_progressUpdateManyWithWhereWithoutUserInput | user_progressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_progressScalarWhereInput | user_progressScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput> | CartItemCreateWithoutUserInput[] | CartItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutUserInput | CartItemCreateOrConnectWithoutUserInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutUserInput | CartItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartItemCreateManyUserInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutUserInput | CartItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutUserInput | CartItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type achievementsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<achievementsCreateWithoutUserInput, achievementsUncheckedCreateWithoutUserInput> | achievementsCreateWithoutUserInput[] | achievementsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: achievementsCreateOrConnectWithoutUserInput | achievementsCreateOrConnectWithoutUserInput[]
    upsert?: achievementsUpsertWithWhereUniqueWithoutUserInput | achievementsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: achievementsCreateManyUserInputEnvelope
    set?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    disconnect?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    delete?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    connect?: achievementsWhereUniqueInput | achievementsWhereUniqueInput[]
    update?: achievementsUpdateWithWhereUniqueWithoutUserInput | achievementsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: achievementsUpdateManyWithWhereWithoutUserInput | achievementsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: achievementsScalarWhereInput | achievementsScalarWhereInput[]
  }

  export type course_enrollmentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<course_enrollmentsCreateWithoutUserInput, course_enrollmentsUncheckedCreateWithoutUserInput> | course_enrollmentsCreateWithoutUserInput[] | course_enrollmentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: course_enrollmentsCreateOrConnectWithoutUserInput | course_enrollmentsCreateOrConnectWithoutUserInput[]
    upsert?: course_enrollmentsUpsertWithWhereUniqueWithoutUserInput | course_enrollmentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: course_enrollmentsCreateManyUserInputEnvelope
    set?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    disconnect?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    delete?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    connect?: course_enrollmentsWhereUniqueInput | course_enrollmentsWhereUniqueInput[]
    update?: course_enrollmentsUpdateWithWhereUniqueWithoutUserInput | course_enrollmentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: course_enrollmentsUpdateManyWithWhereWithoutUserInput | course_enrollmentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: course_enrollmentsScalarWhereInput | course_enrollmentsScalarWhereInput[]
  }

  export type user_progressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_progressCreateWithoutUserInput, user_progressUncheckedCreateWithoutUserInput> | user_progressCreateWithoutUserInput[] | user_progressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_progressCreateOrConnectWithoutUserInput | user_progressCreateOrConnectWithoutUserInput[]
    upsert?: user_progressUpsertWithWhereUniqueWithoutUserInput | user_progressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_progressCreateManyUserInputEnvelope
    set?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    disconnect?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    delete?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    connect?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    update?: user_progressUpdateWithWhereUniqueWithoutUserInput | user_progressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_progressUpdateManyWithWhereWithoutUserInput | user_progressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_progressScalarWhereInput | user_progressScalarWhereInput[]
  }

  export type PaymentCreateNestedOneWithoutCourse_enrollmentsInput = {
    create?: XOR<PaymentCreateWithoutCourse_enrollmentsInput, PaymentUncheckedCreateWithoutCourse_enrollmentsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutCourse_enrollmentsInput
    connect?: PaymentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCourse_enrollmentsInput = {
    create?: XOR<UserCreateWithoutCourse_enrollmentsInput, UserUncheckedCreateWithoutCourse_enrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourse_enrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type user_progressCreateNestedManyWithoutCourse_enrollmentsInput = {
    create?: XOR<user_progressCreateWithoutCourse_enrollmentsInput, user_progressUncheckedCreateWithoutCourse_enrollmentsInput> | user_progressCreateWithoutCourse_enrollmentsInput[] | user_progressUncheckedCreateWithoutCourse_enrollmentsInput[]
    connectOrCreate?: user_progressCreateOrConnectWithoutCourse_enrollmentsInput | user_progressCreateOrConnectWithoutCourse_enrollmentsInput[]
    createMany?: user_progressCreateManyCourse_enrollmentsInputEnvelope
    connect?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
  }

  export type user_progressUncheckedCreateNestedManyWithoutCourse_enrollmentsInput = {
    create?: XOR<user_progressCreateWithoutCourse_enrollmentsInput, user_progressUncheckedCreateWithoutCourse_enrollmentsInput> | user_progressCreateWithoutCourse_enrollmentsInput[] | user_progressUncheckedCreateWithoutCourse_enrollmentsInput[]
    connectOrCreate?: user_progressCreateOrConnectWithoutCourse_enrollmentsInput | user_progressCreateOrConnectWithoutCourse_enrollmentsInput[]
    createMany?: user_progressCreateManyCourse_enrollmentsInputEnvelope
    connect?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
  }

  export type PaymentUpdateOneRequiredWithoutCourse_enrollmentsNestedInput = {
    create?: XOR<PaymentCreateWithoutCourse_enrollmentsInput, PaymentUncheckedCreateWithoutCourse_enrollmentsInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutCourse_enrollmentsInput
    upsert?: PaymentUpsertWithoutCourse_enrollmentsInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutCourse_enrollmentsInput, PaymentUpdateWithoutCourse_enrollmentsInput>, PaymentUncheckedUpdateWithoutCourse_enrollmentsInput>
  }

  export type UserUpdateOneRequiredWithoutCourse_enrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutCourse_enrollmentsInput, UserUncheckedCreateWithoutCourse_enrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourse_enrollmentsInput
    upsert?: UserUpsertWithoutCourse_enrollmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCourse_enrollmentsInput, UserUpdateWithoutCourse_enrollmentsInput>, UserUncheckedUpdateWithoutCourse_enrollmentsInput>
  }

  export type user_progressUpdateManyWithoutCourse_enrollmentsNestedInput = {
    create?: XOR<user_progressCreateWithoutCourse_enrollmentsInput, user_progressUncheckedCreateWithoutCourse_enrollmentsInput> | user_progressCreateWithoutCourse_enrollmentsInput[] | user_progressUncheckedCreateWithoutCourse_enrollmentsInput[]
    connectOrCreate?: user_progressCreateOrConnectWithoutCourse_enrollmentsInput | user_progressCreateOrConnectWithoutCourse_enrollmentsInput[]
    upsert?: user_progressUpsertWithWhereUniqueWithoutCourse_enrollmentsInput | user_progressUpsertWithWhereUniqueWithoutCourse_enrollmentsInput[]
    createMany?: user_progressCreateManyCourse_enrollmentsInputEnvelope
    set?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    disconnect?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    delete?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    connect?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    update?: user_progressUpdateWithWhereUniqueWithoutCourse_enrollmentsInput | user_progressUpdateWithWhereUniqueWithoutCourse_enrollmentsInput[]
    updateMany?: user_progressUpdateManyWithWhereWithoutCourse_enrollmentsInput | user_progressUpdateManyWithWhereWithoutCourse_enrollmentsInput[]
    deleteMany?: user_progressScalarWhereInput | user_progressScalarWhereInput[]
  }

  export type user_progressUncheckedUpdateManyWithoutCourse_enrollmentsNestedInput = {
    create?: XOR<user_progressCreateWithoutCourse_enrollmentsInput, user_progressUncheckedCreateWithoutCourse_enrollmentsInput> | user_progressCreateWithoutCourse_enrollmentsInput[] | user_progressUncheckedCreateWithoutCourse_enrollmentsInput[]
    connectOrCreate?: user_progressCreateOrConnectWithoutCourse_enrollmentsInput | user_progressCreateOrConnectWithoutCourse_enrollmentsInput[]
    upsert?: user_progressUpsertWithWhereUniqueWithoutCourse_enrollmentsInput | user_progressUpsertWithWhereUniqueWithoutCourse_enrollmentsInput[]
    createMany?: user_progressCreateManyCourse_enrollmentsInputEnvelope
    set?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    disconnect?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    delete?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    connect?: user_progressWhereUniqueInput | user_progressWhereUniqueInput[]
    update?: user_progressUpdateWithWhereUniqueWithoutCourse_enrollmentsInput | user_progressUpdateWithWhereUniqueWithoutCourse_enrollmentsInput[]
    updateMany?: user_progressUpdateManyWithWhereWithoutCourse_enrollmentsInput | user_progressUpdateManyWithWhereWithoutCourse_enrollmentsInput[]
    deleteMany?: user_progressScalarWhereInput | user_progressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAchievementsInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAchievementsNestedInput = {
    create?: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAchievementsInput
    upsert?: UserUpsertWithoutAchievementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAchievementsInput, UserUpdateWithoutAchievementsInput>, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type course_enrollmentsCreateNestedOneWithoutUser_progressInput = {
    create?: XOR<course_enrollmentsCreateWithoutUser_progressInput, course_enrollmentsUncheckedCreateWithoutUser_progressInput>
    connectOrCreate?: course_enrollmentsCreateOrConnectWithoutUser_progressInput
    connect?: course_enrollmentsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUser_progressInput = {
    create?: XOR<UserCreateWithoutUser_progressInput, UserUncheckedCreateWithoutUser_progressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_progressInput
    connect?: UserWhereUniqueInput
  }

  export type course_enrollmentsUpdateOneRequiredWithoutUser_progressNestedInput = {
    create?: XOR<course_enrollmentsCreateWithoutUser_progressInput, course_enrollmentsUncheckedCreateWithoutUser_progressInput>
    connectOrCreate?: course_enrollmentsCreateOrConnectWithoutUser_progressInput
    upsert?: course_enrollmentsUpsertWithoutUser_progressInput
    connect?: course_enrollmentsWhereUniqueInput
    update?: XOR<XOR<course_enrollmentsUpdateToOneWithWhereWithoutUser_progressInput, course_enrollmentsUpdateWithoutUser_progressInput>, course_enrollmentsUncheckedUpdateWithoutUser_progressInput>
  }

  export type UserUpdateOneRequiredWithoutUser_progressNestedInput = {
    create?: XOR<UserCreateWithoutUser_progressInput, UserUncheckedCreateWithoutUser_progressInput>
    connectOrCreate?: UserCreateOrConnectWithoutUser_progressInput
    upsert?: UserUpsertWithoutUser_progressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUser_progressInput, UserUpdateWithoutUser_progressInput>, UserUncheckedUpdateWithoutUser_progressInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutCartItemInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt: Date | string
    role?: $Enums.Role
    phone?: string | null
    language?: string | null
    country?: string | null
    occupation?: string | null
    totalspent?: number | null
    coursesowned?: number | null
    profileImage?: string | null
    city?: string | null
    company?: string | null
    linkedIn?: string | null
    bio?: string | null
    lastLoginAt?: Date | string | null
    totalSpent?: number | null
    coursesOwned?: number | null
    Payment?: PaymentCreateNestedManyWithoutUserInput
    achievements?: achievementsCreateNestedManyWithoutUserInput
    course_enrollments?: course_enrollmentsCreateNestedManyWithoutUserInput
    user_progress?: user_progressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartItemInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt: Date | string
    role?: $Enums.Role
    phone?: string | null
    language?: string | null
    country?: string | null
    occupation?: string | null
    totalspent?: number | null
    coursesowned?: number | null
    profileImage?: string | null
    city?: string | null
    company?: string | null
    linkedIn?: string | null
    bio?: string | null
    lastLoginAt?: Date | string | null
    totalSpent?: number | null
    coursesOwned?: number | null
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    achievements?: achievementsUncheckedCreateNestedManyWithoutUserInput
    course_enrollments?: course_enrollmentsUncheckedCreateNestedManyWithoutUserInput
    user_progress?: user_progressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartItemInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartItemInput, UserUncheckedCreateWithoutCartItemInput>
  }

  export type UserUpsertWithoutCartItemInput = {
    update: XOR<UserUpdateWithoutCartItemInput, UserUncheckedUpdateWithoutCartItemInput>
    create: XOR<UserCreateWithoutCartItemInput, UserUncheckedCreateWithoutCartItemInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartItemInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartItemInput, UserUncheckedUpdateWithoutCartItemInput>
  }

  export type UserUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    totalspent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesowned?: NullableIntFieldUpdateOperationsInput | number | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesOwned?: NullableIntFieldUpdateOperationsInput | number | null
    Payment?: PaymentUpdateManyWithoutUserNestedInput
    achievements?: achievementsUpdateManyWithoutUserNestedInput
    course_enrollments?: course_enrollmentsUpdateManyWithoutUserNestedInput
    user_progress?: user_progressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    totalspent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesowned?: NullableIntFieldUpdateOperationsInput | number | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesOwned?: NullableIntFieldUpdateOperationsInput | number | null
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    achievements?: achievementsUncheckedUpdateManyWithoutUserNestedInput
    course_enrollments?: course_enrollmentsUncheckedUpdateManyWithoutUserNestedInput
    user_progress?: user_progressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPaymentInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt: Date | string
    role?: $Enums.Role
    phone?: string | null
    language?: string | null
    country?: string | null
    occupation?: string | null
    totalspent?: number | null
    coursesowned?: number | null
    profileImage?: string | null
    city?: string | null
    company?: string | null
    linkedIn?: string | null
    bio?: string | null
    lastLoginAt?: Date | string | null
    totalSpent?: number | null
    coursesOwned?: number | null
    CartItem?: CartItemCreateNestedManyWithoutUserInput
    achievements?: achievementsCreateNestedManyWithoutUserInput
    course_enrollments?: course_enrollmentsCreateNestedManyWithoutUserInput
    user_progress?: user_progressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt: Date | string
    role?: $Enums.Role
    phone?: string | null
    language?: string | null
    country?: string | null
    occupation?: string | null
    totalspent?: number | null
    coursesowned?: number | null
    profileImage?: string | null
    city?: string | null
    company?: string | null
    linkedIn?: string | null
    bio?: string | null
    lastLoginAt?: Date | string | null
    totalSpent?: number | null
    coursesOwned?: number | null
    CartItem?: CartItemUncheckedCreateNestedManyWithoutUserInput
    achievements?: achievementsUncheckedCreateNestedManyWithoutUserInput
    course_enrollments?: course_enrollmentsUncheckedCreateNestedManyWithoutUserInput
    user_progress?: user_progressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
  }

  export type course_enrollmentsCreateWithoutPaymentInput = {
    id?: string
    certificationName: string
    provider: string
    price: number
    status?: string | null
    enrolledAt?: Date | string | null
    User: UserCreateNestedOneWithoutCourse_enrollmentsInput
    user_progress?: user_progressCreateNestedManyWithoutCourse_enrollmentsInput
  }

  export type course_enrollmentsUncheckedCreateWithoutPaymentInput = {
    id?: string
    userId: string
    certificationName: string
    provider: string
    price: number
    status?: string | null
    enrolledAt?: Date | string | null
    user_progress?: user_progressUncheckedCreateNestedManyWithoutCourse_enrollmentsInput
  }

  export type course_enrollmentsCreateOrConnectWithoutPaymentInput = {
    where: course_enrollmentsWhereUniqueInput
    create: XOR<course_enrollmentsCreateWithoutPaymentInput, course_enrollmentsUncheckedCreateWithoutPaymentInput>
  }

  export type course_enrollmentsCreateManyPaymentInputEnvelope = {
    data: course_enrollmentsCreateManyPaymentInput | course_enrollmentsCreateManyPaymentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPaymentInput = {
    update: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
    create: XOR<UserCreateWithoutPaymentInput, UserUncheckedCreateWithoutPaymentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentInput, UserUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    totalspent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesowned?: NullableIntFieldUpdateOperationsInput | number | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesOwned?: NullableIntFieldUpdateOperationsInput | number | null
    CartItem?: CartItemUpdateManyWithoutUserNestedInput
    achievements?: achievementsUpdateManyWithoutUserNestedInput
    course_enrollments?: course_enrollmentsUpdateManyWithoutUserNestedInput
    user_progress?: user_progressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    totalspent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesowned?: NullableIntFieldUpdateOperationsInput | number | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesOwned?: NullableIntFieldUpdateOperationsInput | number | null
    CartItem?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    achievements?: achievementsUncheckedUpdateManyWithoutUserNestedInput
    course_enrollments?: course_enrollmentsUncheckedUpdateManyWithoutUserNestedInput
    user_progress?: user_progressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type course_enrollmentsUpsertWithWhereUniqueWithoutPaymentInput = {
    where: course_enrollmentsWhereUniqueInput
    update: XOR<course_enrollmentsUpdateWithoutPaymentInput, course_enrollmentsUncheckedUpdateWithoutPaymentInput>
    create: XOR<course_enrollmentsCreateWithoutPaymentInput, course_enrollmentsUncheckedCreateWithoutPaymentInput>
  }

  export type course_enrollmentsUpdateWithWhereUniqueWithoutPaymentInput = {
    where: course_enrollmentsWhereUniqueInput
    data: XOR<course_enrollmentsUpdateWithoutPaymentInput, course_enrollmentsUncheckedUpdateWithoutPaymentInput>
  }

  export type course_enrollmentsUpdateManyWithWhereWithoutPaymentInput = {
    where: course_enrollmentsScalarWhereInput
    data: XOR<course_enrollmentsUpdateManyMutationInput, course_enrollmentsUncheckedUpdateManyWithoutPaymentInput>
  }

  export type course_enrollmentsScalarWhereInput = {
    AND?: course_enrollmentsScalarWhereInput | course_enrollmentsScalarWhereInput[]
    OR?: course_enrollmentsScalarWhereInput[]
    NOT?: course_enrollmentsScalarWhereInput | course_enrollmentsScalarWhereInput[]
    id?: StringFilter<"course_enrollments"> | string
    userId?: StringFilter<"course_enrollments"> | string
    paymentId?: StringFilter<"course_enrollments"> | string
    certificationName?: StringFilter<"course_enrollments"> | string
    provider?: StringFilter<"course_enrollments"> | string
    price?: FloatFilter<"course_enrollments"> | number
    status?: StringNullableFilter<"course_enrollments"> | string | null
    enrolledAt?: DateTimeNullableFilter<"course_enrollments"> | Date | string | null
  }

  export type CartItemCreateWithoutUserInput = {
    id: string
    certificationId: string
    certificationName: string
    price: number
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    provider?: string | null
    category?: string | null
    examCode?: string | null
  }

  export type CartItemUncheckedCreateWithoutUserInput = {
    id: string
    certificationId: string
    certificationName: string
    price: number
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    provider?: string | null
    category?: string | null
    examCode?: string | null
  }

  export type CartItemCreateOrConnectWithoutUserInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput>
  }

  export type CartItemCreateManyUserInputEnvelope = {
    data: CartItemCreateManyUserInput | CartItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    id: string
    stripeSessionId: string
    stripePaymentId?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
    receiptNumber?: string | null
    paymentMethod?: string | null
    coursesCount?: number | null
    course_enrollments?: course_enrollmentsCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id: string
    stripeSessionId: string
    stripePaymentId?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
    receiptNumber?: string | null
    paymentMethod?: string | null
    coursesCount?: number | null
    course_enrollments?: course_enrollmentsUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type achievementsCreateWithoutUserInput = {
    id: string
    type: string
    title: string
    description: string
    certificationId?: string | null
    badgeUrl?: string | null
    certificateUrl?: string | null
    points?: number
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    verificationCode?: string | null
  }

  export type achievementsUncheckedCreateWithoutUserInput = {
    id: string
    type: string
    title: string
    description: string
    certificationId?: string | null
    badgeUrl?: string | null
    certificateUrl?: string | null
    points?: number
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    verificationCode?: string | null
  }

  export type achievementsCreateOrConnectWithoutUserInput = {
    where: achievementsWhereUniqueInput
    create: XOR<achievementsCreateWithoutUserInput, achievementsUncheckedCreateWithoutUserInput>
  }

  export type achievementsCreateManyUserInputEnvelope = {
    data: achievementsCreateManyUserInput | achievementsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type course_enrollmentsCreateWithoutUserInput = {
    id?: string
    certificationName: string
    provider: string
    price: number
    status?: string | null
    enrolledAt?: Date | string | null
    Payment: PaymentCreateNestedOneWithoutCourse_enrollmentsInput
    user_progress?: user_progressCreateNestedManyWithoutCourse_enrollmentsInput
  }

  export type course_enrollmentsUncheckedCreateWithoutUserInput = {
    id?: string
    paymentId: string
    certificationName: string
    provider: string
    price: number
    status?: string | null
    enrolledAt?: Date | string | null
    user_progress?: user_progressUncheckedCreateNestedManyWithoutCourse_enrollmentsInput
  }

  export type course_enrollmentsCreateOrConnectWithoutUserInput = {
    where: course_enrollmentsWhereUniqueInput
    create: XOR<course_enrollmentsCreateWithoutUserInput, course_enrollmentsUncheckedCreateWithoutUserInput>
  }

  export type course_enrollmentsCreateManyUserInputEnvelope = {
    data: course_enrollmentsCreateManyUserInput | course_enrollmentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_progressCreateWithoutUserInput = {
    id: string
    progressPercent?: number
    timeSpentMinutes?: number
    lastAccessed?: Date | string
    modulesCompleted?: number
    totalModules?: number
    notes?: string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
    course_enrollments: course_enrollmentsCreateNestedOneWithoutUser_progressInput
  }

  export type user_progressUncheckedCreateWithoutUserInput = {
    id: string
    enrollmentId: string
    progressPercent?: number
    timeSpentMinutes?: number
    lastAccessed?: Date | string
    modulesCompleted?: number
    totalModules?: number
    notes?: string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type user_progressCreateOrConnectWithoutUserInput = {
    where: user_progressWhereUniqueInput
    create: XOR<user_progressCreateWithoutUserInput, user_progressUncheckedCreateWithoutUserInput>
  }

  export type user_progressCreateManyUserInputEnvelope = {
    data: user_progressCreateManyUserInput | user_progressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartItemUpsertWithWhereUniqueWithoutUserInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutUserInput, CartItemUncheckedUpdateWithoutUserInput>
    create: XOR<CartItemCreateWithoutUserInput, CartItemUncheckedCreateWithoutUserInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutUserInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutUserInput, CartItemUncheckedUpdateWithoutUserInput>
  }

  export type CartItemUpdateManyWithWhereWithoutUserInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutUserInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    id?: StringFilter<"CartItem"> | string
    userId?: StringFilter<"CartItem"> | string
    certificationId?: StringFilter<"CartItem"> | string
    certificationName?: StringFilter<"CartItem"> | string
    price?: FloatFilter<"CartItem"> | number
    logoUrl?: StringNullableFilter<"CartItem"> | string | null
    createdAt?: DateTimeFilter<"CartItem"> | Date | string
    updatedAt?: DateTimeFilter<"CartItem"> | Date | string
    provider?: StringNullableFilter<"CartItem"> | string | null
    category?: StringNullableFilter<"CartItem"> | string | null
    examCode?: StringNullableFilter<"CartItem"> | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    stripeSessionId?: StringFilter<"Payment"> | string
    stripePaymentId?: StringNullableFilter<"Payment"> | string | null
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    items?: JsonFilter<"Payment">
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    receiptNumber?: StringNullableFilter<"Payment"> | string | null
    paymentMethod?: StringNullableFilter<"Payment"> | string | null
    coursesCount?: IntNullableFilter<"Payment"> | number | null
  }

  export type achievementsUpsertWithWhereUniqueWithoutUserInput = {
    where: achievementsWhereUniqueInput
    update: XOR<achievementsUpdateWithoutUserInput, achievementsUncheckedUpdateWithoutUserInput>
    create: XOR<achievementsCreateWithoutUserInput, achievementsUncheckedCreateWithoutUserInput>
  }

  export type achievementsUpdateWithWhereUniqueWithoutUserInput = {
    where: achievementsWhereUniqueInput
    data: XOR<achievementsUpdateWithoutUserInput, achievementsUncheckedUpdateWithoutUserInput>
  }

  export type achievementsUpdateManyWithWhereWithoutUserInput = {
    where: achievementsScalarWhereInput
    data: XOR<achievementsUpdateManyMutationInput, achievementsUncheckedUpdateManyWithoutUserInput>
  }

  export type achievementsScalarWhereInput = {
    AND?: achievementsScalarWhereInput | achievementsScalarWhereInput[]
    OR?: achievementsScalarWhereInput[]
    NOT?: achievementsScalarWhereInput | achievementsScalarWhereInput[]
    id?: StringFilter<"achievements"> | string
    userId?: StringFilter<"achievements"> | string
    type?: StringFilter<"achievements"> | string
    title?: StringFilter<"achievements"> | string
    description?: StringFilter<"achievements"> | string
    certificationId?: StringNullableFilter<"achievements"> | string | null
    badgeUrl?: StringNullableFilter<"achievements"> | string | null
    certificateUrl?: StringNullableFilter<"achievements"> | string | null
    points?: IntFilter<"achievements"> | number
    issuedAt?: DateTimeFilter<"achievements"> | Date | string
    expiresAt?: DateTimeNullableFilter<"achievements"> | Date | string | null
    verificationCode?: StringNullableFilter<"achievements"> | string | null
  }

  export type course_enrollmentsUpsertWithWhereUniqueWithoutUserInput = {
    where: course_enrollmentsWhereUniqueInput
    update: XOR<course_enrollmentsUpdateWithoutUserInput, course_enrollmentsUncheckedUpdateWithoutUserInput>
    create: XOR<course_enrollmentsCreateWithoutUserInput, course_enrollmentsUncheckedCreateWithoutUserInput>
  }

  export type course_enrollmentsUpdateWithWhereUniqueWithoutUserInput = {
    where: course_enrollmentsWhereUniqueInput
    data: XOR<course_enrollmentsUpdateWithoutUserInput, course_enrollmentsUncheckedUpdateWithoutUserInput>
  }

  export type course_enrollmentsUpdateManyWithWhereWithoutUserInput = {
    where: course_enrollmentsScalarWhereInput
    data: XOR<course_enrollmentsUpdateManyMutationInput, course_enrollmentsUncheckedUpdateManyWithoutUserInput>
  }

  export type user_progressUpsertWithWhereUniqueWithoutUserInput = {
    where: user_progressWhereUniqueInput
    update: XOR<user_progressUpdateWithoutUserInput, user_progressUncheckedUpdateWithoutUserInput>
    create: XOR<user_progressCreateWithoutUserInput, user_progressUncheckedCreateWithoutUserInput>
  }

  export type user_progressUpdateWithWhereUniqueWithoutUserInput = {
    where: user_progressWhereUniqueInput
    data: XOR<user_progressUpdateWithoutUserInput, user_progressUncheckedUpdateWithoutUserInput>
  }

  export type user_progressUpdateManyWithWhereWithoutUserInput = {
    where: user_progressScalarWhereInput
    data: XOR<user_progressUpdateManyMutationInput, user_progressUncheckedUpdateManyWithoutUserInput>
  }

  export type user_progressScalarWhereInput = {
    AND?: user_progressScalarWhereInput | user_progressScalarWhereInput[]
    OR?: user_progressScalarWhereInput[]
    NOT?: user_progressScalarWhereInput | user_progressScalarWhereInput[]
    id?: StringFilter<"user_progress"> | string
    userId?: StringFilter<"user_progress"> | string
    enrollmentId?: StringFilter<"user_progress"> | string
    progressPercent?: IntFilter<"user_progress"> | number
    timeSpentMinutes?: IntFilter<"user_progress"> | number
    lastAccessed?: DateTimeFilter<"user_progress"> | Date | string
    modulesCompleted?: IntFilter<"user_progress"> | number
    totalModules?: IntFilter<"user_progress"> | number
    notes?: StringNullableFilter<"user_progress"> | string | null
    bookmarks?: JsonNullableFilter<"user_progress">
    createdAt?: DateTimeFilter<"user_progress"> | Date | string
    updatedAt?: DateTimeFilter<"user_progress"> | Date | string
  }

  export type PaymentCreateWithoutCourse_enrollmentsInput = {
    id: string
    stripeSessionId: string
    stripePaymentId?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
    receiptNumber?: string | null
    paymentMethod?: string | null
    coursesCount?: number | null
    User: UserCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutCourse_enrollmentsInput = {
    id: string
    userId: string
    stripeSessionId: string
    stripePaymentId?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
    receiptNumber?: string | null
    paymentMethod?: string | null
    coursesCount?: number | null
  }

  export type PaymentCreateOrConnectWithoutCourse_enrollmentsInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCourse_enrollmentsInput, PaymentUncheckedCreateWithoutCourse_enrollmentsInput>
  }

  export type UserCreateWithoutCourse_enrollmentsInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt: Date | string
    role?: $Enums.Role
    phone?: string | null
    language?: string | null
    country?: string | null
    occupation?: string | null
    totalspent?: number | null
    coursesowned?: number | null
    profileImage?: string | null
    city?: string | null
    company?: string | null
    linkedIn?: string | null
    bio?: string | null
    lastLoginAt?: Date | string | null
    totalSpent?: number | null
    coursesOwned?: number | null
    CartItem?: CartItemCreateNestedManyWithoutUserInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
    achievements?: achievementsCreateNestedManyWithoutUserInput
    user_progress?: user_progressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCourse_enrollmentsInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt: Date | string
    role?: $Enums.Role
    phone?: string | null
    language?: string | null
    country?: string | null
    occupation?: string | null
    totalspent?: number | null
    coursesowned?: number | null
    profileImage?: string | null
    city?: string | null
    company?: string | null
    linkedIn?: string | null
    bio?: string | null
    lastLoginAt?: Date | string | null
    totalSpent?: number | null
    coursesOwned?: number | null
    CartItem?: CartItemUncheckedCreateNestedManyWithoutUserInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    achievements?: achievementsUncheckedCreateNestedManyWithoutUserInput
    user_progress?: user_progressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCourse_enrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCourse_enrollmentsInput, UserUncheckedCreateWithoutCourse_enrollmentsInput>
  }

  export type user_progressCreateWithoutCourse_enrollmentsInput = {
    id: string
    progressPercent?: number
    timeSpentMinutes?: number
    lastAccessed?: Date | string
    modulesCompleted?: number
    totalModules?: number
    notes?: string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
    User: UserCreateNestedOneWithoutUser_progressInput
  }

  export type user_progressUncheckedCreateWithoutCourse_enrollmentsInput = {
    id: string
    userId: string
    progressPercent?: number
    timeSpentMinutes?: number
    lastAccessed?: Date | string
    modulesCompleted?: number
    totalModules?: number
    notes?: string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type user_progressCreateOrConnectWithoutCourse_enrollmentsInput = {
    where: user_progressWhereUniqueInput
    create: XOR<user_progressCreateWithoutCourse_enrollmentsInput, user_progressUncheckedCreateWithoutCourse_enrollmentsInput>
  }

  export type user_progressCreateManyCourse_enrollmentsInputEnvelope = {
    data: user_progressCreateManyCourse_enrollmentsInput | user_progressCreateManyCourse_enrollmentsInput[]
    skipDuplicates?: boolean
  }

  export type PaymentUpsertWithoutCourse_enrollmentsInput = {
    update: XOR<PaymentUpdateWithoutCourse_enrollmentsInput, PaymentUncheckedUpdateWithoutCourse_enrollmentsInput>
    create: XOR<PaymentCreateWithoutCourse_enrollmentsInput, PaymentUncheckedCreateWithoutCourse_enrollmentsInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutCourse_enrollmentsInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutCourse_enrollmentsInput, PaymentUncheckedUpdateWithoutCourse_enrollmentsInput>
  }

  export type PaymentUpdateWithoutCourse_enrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    coursesCount?: NullableIntFieldUpdateOperationsInput | number | null
    User?: UserUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCourse_enrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    coursesCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutCourse_enrollmentsInput = {
    update: XOR<UserUpdateWithoutCourse_enrollmentsInput, UserUncheckedUpdateWithoutCourse_enrollmentsInput>
    create: XOR<UserCreateWithoutCourse_enrollmentsInput, UserUncheckedCreateWithoutCourse_enrollmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCourse_enrollmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCourse_enrollmentsInput, UserUncheckedUpdateWithoutCourse_enrollmentsInput>
  }

  export type UserUpdateWithoutCourse_enrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    totalspent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesowned?: NullableIntFieldUpdateOperationsInput | number | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesOwned?: NullableIntFieldUpdateOperationsInput | number | null
    CartItem?: CartItemUpdateManyWithoutUserNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
    achievements?: achievementsUpdateManyWithoutUserNestedInput
    user_progress?: user_progressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCourse_enrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    totalspent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesowned?: NullableIntFieldUpdateOperationsInput | number | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesOwned?: NullableIntFieldUpdateOperationsInput | number | null
    CartItem?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    achievements?: achievementsUncheckedUpdateManyWithoutUserNestedInput
    user_progress?: user_progressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type user_progressUpsertWithWhereUniqueWithoutCourse_enrollmentsInput = {
    where: user_progressWhereUniqueInput
    update: XOR<user_progressUpdateWithoutCourse_enrollmentsInput, user_progressUncheckedUpdateWithoutCourse_enrollmentsInput>
    create: XOR<user_progressCreateWithoutCourse_enrollmentsInput, user_progressUncheckedCreateWithoutCourse_enrollmentsInput>
  }

  export type user_progressUpdateWithWhereUniqueWithoutCourse_enrollmentsInput = {
    where: user_progressWhereUniqueInput
    data: XOR<user_progressUpdateWithoutCourse_enrollmentsInput, user_progressUncheckedUpdateWithoutCourse_enrollmentsInput>
  }

  export type user_progressUpdateManyWithWhereWithoutCourse_enrollmentsInput = {
    where: user_progressScalarWhereInput
    data: XOR<user_progressUpdateManyMutationInput, user_progressUncheckedUpdateManyWithoutCourse_enrollmentsInput>
  }

  export type UserCreateWithoutAchievementsInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt: Date | string
    role?: $Enums.Role
    phone?: string | null
    language?: string | null
    country?: string | null
    occupation?: string | null
    totalspent?: number | null
    coursesowned?: number | null
    profileImage?: string | null
    city?: string | null
    company?: string | null
    linkedIn?: string | null
    bio?: string | null
    lastLoginAt?: Date | string | null
    totalSpent?: number | null
    coursesOwned?: number | null
    CartItem?: CartItemCreateNestedManyWithoutUserInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
    course_enrollments?: course_enrollmentsCreateNestedManyWithoutUserInput
    user_progress?: user_progressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAchievementsInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt: Date | string
    role?: $Enums.Role
    phone?: string | null
    language?: string | null
    country?: string | null
    occupation?: string | null
    totalspent?: number | null
    coursesowned?: number | null
    profileImage?: string | null
    city?: string | null
    company?: string | null
    linkedIn?: string | null
    bio?: string | null
    lastLoginAt?: Date | string | null
    totalSpent?: number | null
    coursesOwned?: number | null
    CartItem?: CartItemUncheckedCreateNestedManyWithoutUserInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    course_enrollments?: course_enrollmentsUncheckedCreateNestedManyWithoutUserInput
    user_progress?: user_progressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAchievementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
  }

  export type UserUpsertWithoutAchievementsInput = {
    update: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
    create: XOR<UserCreateWithoutAchievementsInput, UserUncheckedCreateWithoutAchievementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAchievementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAchievementsInput, UserUncheckedUpdateWithoutAchievementsInput>
  }

  export type UserUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    totalspent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesowned?: NullableIntFieldUpdateOperationsInput | number | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesOwned?: NullableIntFieldUpdateOperationsInput | number | null
    CartItem?: CartItemUpdateManyWithoutUserNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
    course_enrollments?: course_enrollmentsUpdateManyWithoutUserNestedInput
    user_progress?: user_progressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAchievementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    totalspent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesowned?: NullableIntFieldUpdateOperationsInput | number | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesOwned?: NullableIntFieldUpdateOperationsInput | number | null
    CartItem?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    course_enrollments?: course_enrollmentsUncheckedUpdateManyWithoutUserNestedInput
    user_progress?: user_progressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type course_enrollmentsCreateWithoutUser_progressInput = {
    id?: string
    certificationName: string
    provider: string
    price: number
    status?: string | null
    enrolledAt?: Date | string | null
    Payment: PaymentCreateNestedOneWithoutCourse_enrollmentsInput
    User: UserCreateNestedOneWithoutCourse_enrollmentsInput
  }

  export type course_enrollmentsUncheckedCreateWithoutUser_progressInput = {
    id?: string
    userId: string
    paymentId: string
    certificationName: string
    provider: string
    price: number
    status?: string | null
    enrolledAt?: Date | string | null
  }

  export type course_enrollmentsCreateOrConnectWithoutUser_progressInput = {
    where: course_enrollmentsWhereUniqueInput
    create: XOR<course_enrollmentsCreateWithoutUser_progressInput, course_enrollmentsUncheckedCreateWithoutUser_progressInput>
  }

  export type UserCreateWithoutUser_progressInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt: Date | string
    role?: $Enums.Role
    phone?: string | null
    language?: string | null
    country?: string | null
    occupation?: string | null
    totalspent?: number | null
    coursesowned?: number | null
    profileImage?: string | null
    city?: string | null
    company?: string | null
    linkedIn?: string | null
    bio?: string | null
    lastLoginAt?: Date | string | null
    totalSpent?: number | null
    coursesOwned?: number | null
    CartItem?: CartItemCreateNestedManyWithoutUserInput
    Payment?: PaymentCreateNestedManyWithoutUserInput
    achievements?: achievementsCreateNestedManyWithoutUserInput
    course_enrollments?: course_enrollmentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUser_progressInput = {
    id: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt: Date | string
    role?: $Enums.Role
    phone?: string | null
    language?: string | null
    country?: string | null
    occupation?: string | null
    totalspent?: number | null
    coursesowned?: number | null
    profileImage?: string | null
    city?: string | null
    company?: string | null
    linkedIn?: string | null
    bio?: string | null
    lastLoginAt?: Date | string | null
    totalSpent?: number | null
    coursesOwned?: number | null
    CartItem?: CartItemUncheckedCreateNestedManyWithoutUserInput
    Payment?: PaymentUncheckedCreateNestedManyWithoutUserInput
    achievements?: achievementsUncheckedCreateNestedManyWithoutUserInput
    course_enrollments?: course_enrollmentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUser_progressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUser_progressInput, UserUncheckedCreateWithoutUser_progressInput>
  }

  export type course_enrollmentsUpsertWithoutUser_progressInput = {
    update: XOR<course_enrollmentsUpdateWithoutUser_progressInput, course_enrollmentsUncheckedUpdateWithoutUser_progressInput>
    create: XOR<course_enrollmentsCreateWithoutUser_progressInput, course_enrollmentsUncheckedCreateWithoutUser_progressInput>
    where?: course_enrollmentsWhereInput
  }

  export type course_enrollmentsUpdateToOneWithWhereWithoutUser_progressInput = {
    where?: course_enrollmentsWhereInput
    data: XOR<course_enrollmentsUpdateWithoutUser_progressInput, course_enrollmentsUncheckedUpdateWithoutUser_progressInput>
  }

  export type course_enrollmentsUpdateWithoutUser_progressInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Payment?: PaymentUpdateOneRequiredWithoutCourse_enrollmentsNestedInput
    User?: UserUpdateOneRequiredWithoutCourse_enrollmentsNestedInput
  }

  export type course_enrollmentsUncheckedUpdateWithoutUser_progressInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutUser_progressInput = {
    update: XOR<UserUpdateWithoutUser_progressInput, UserUncheckedUpdateWithoutUser_progressInput>
    create: XOR<UserCreateWithoutUser_progressInput, UserUncheckedCreateWithoutUser_progressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUser_progressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUser_progressInput, UserUncheckedUpdateWithoutUser_progressInput>
  }

  export type UserUpdateWithoutUser_progressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    totalspent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesowned?: NullableIntFieldUpdateOperationsInput | number | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesOwned?: NullableIntFieldUpdateOperationsInput | number | null
    CartItem?: CartItemUpdateManyWithoutUserNestedInput
    Payment?: PaymentUpdateManyWithoutUserNestedInput
    achievements?: achievementsUpdateManyWithoutUserNestedInput
    course_enrollments?: course_enrollmentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUser_progressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    totalspent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesowned?: NullableIntFieldUpdateOperationsInput | number | null
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    linkedIn?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalSpent?: NullableFloatFieldUpdateOperationsInput | number | null
    coursesOwned?: NullableIntFieldUpdateOperationsInput | number | null
    CartItem?: CartItemUncheckedUpdateManyWithoutUserNestedInput
    Payment?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    achievements?: achievementsUncheckedUpdateManyWithoutUserNestedInput
    course_enrollments?: course_enrollmentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type course_enrollmentsCreateManyPaymentInput = {
    id?: string
    userId: string
    certificationName: string
    provider: string
    price: number
    status?: string | null
    enrolledAt?: Date | string | null
  }

  export type course_enrollmentsUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUpdateOneRequiredWithoutCourse_enrollmentsNestedInput
    user_progress?: user_progressUpdateManyWithoutCourse_enrollmentsNestedInput
  }

  export type course_enrollmentsUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_progress?: user_progressUncheckedUpdateManyWithoutCourse_enrollmentsNestedInput
  }

  export type course_enrollmentsUncheckedUpdateManyWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CartItemCreateManyUserInput = {
    id: string
    certificationId: string
    certificationName: string
    price: number
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    provider?: string | null
    category?: string | null
    examCode?: string | null
  }

  export type PaymentCreateManyUserInput = {
    id: string
    stripeSessionId: string
    stripePaymentId?: string | null
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
    receiptNumber?: string | null
    paymentMethod?: string | null
    coursesCount?: number | null
  }

  export type achievementsCreateManyUserInput = {
    id: string
    type: string
    title: string
    description: string
    certificationId?: string | null
    badgeUrl?: string | null
    certificateUrl?: string | null
    points?: number
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    verificationCode?: string | null
  }

  export type course_enrollmentsCreateManyUserInput = {
    id?: string
    paymentId: string
    certificationName: string
    provider: string
    price: number
    status?: string | null
    enrolledAt?: Date | string | null
  }

  export type user_progressCreateManyUserInput = {
    id: string
    enrollmentId: string
    progressPercent?: number
    timeSpentMinutes?: number
    lastAccessed?: Date | string
    modulesCompleted?: number
    totalModules?: number
    notes?: string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type CartItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificationId?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    examCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificationId?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    examCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificationId?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    examCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    coursesCount?: NullableIntFieldUpdateOperationsInput | number | null
    course_enrollments?: course_enrollmentsUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    coursesCount?: NullableIntFieldUpdateOperationsInput | number | null
    course_enrollments?: course_enrollmentsUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    coursesCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type achievementsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certificationId?: NullableStringFieldUpdateOperationsInput | string | null
    badgeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type achievementsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certificationId?: NullableStringFieldUpdateOperationsInput | string | null
    badgeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type achievementsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    certificationId?: NullableStringFieldUpdateOperationsInput | string | null
    badgeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type course_enrollmentsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Payment?: PaymentUpdateOneRequiredWithoutCourse_enrollmentsNestedInput
    user_progress?: user_progressUpdateManyWithoutCourse_enrollmentsNestedInput
  }

  export type course_enrollmentsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_progress?: user_progressUncheckedUpdateManyWithoutCourse_enrollmentsNestedInput
  }

  export type course_enrollmentsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    certificationName?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: NullableStringFieldUpdateOperationsInput | string | null
    enrolledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_progressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressPercent?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    modulesCompleted?: IntFieldUpdateOperationsInput | number
    totalModules?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course_enrollments?: course_enrollmentsUpdateOneRequiredWithoutUser_progressNestedInput
  }

  export type user_progressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrollmentId?: StringFieldUpdateOperationsInput | string
    progressPercent?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    modulesCompleted?: IntFieldUpdateOperationsInput | number
    totalModules?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_progressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    enrollmentId?: StringFieldUpdateOperationsInput | string
    progressPercent?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    modulesCompleted?: IntFieldUpdateOperationsInput | number
    totalModules?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_progressCreateManyCourse_enrollmentsInput = {
    id: string
    userId: string
    progressPercent?: number
    timeSpentMinutes?: number
    lastAccessed?: Date | string
    modulesCompleted?: number
    totalModules?: number
    notes?: string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type user_progressUpdateWithoutCourse_enrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    progressPercent?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    modulesCompleted?: IntFieldUpdateOperationsInput | number
    totalModules?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutUser_progressNestedInput
  }

  export type user_progressUncheckedUpdateWithoutCourse_enrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progressPercent?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    modulesCompleted?: IntFieldUpdateOperationsInput | number
    totalModules?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_progressUncheckedUpdateManyWithoutCourse_enrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progressPercent?: IntFieldUpdateOperationsInput | number
    timeSpentMinutes?: IntFieldUpdateOperationsInput | number
    lastAccessed?: DateTimeFieldUpdateOperationsInput | Date | string
    modulesCompleted?: IntFieldUpdateOperationsInput | number
    totalModules?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    bookmarks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}