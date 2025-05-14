
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
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Auth
 * 
 */
export type Auth = $Result.DefaultSelection<Prisma.$AuthPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Claim
 * 
 */
export type Claim = $Result.DefaultSelection<Prisma.$ClaimPayload>
/**
 * Model PolicyType
 * 
 */
export type PolicyType = $Result.DefaultSelection<Prisma.$PolicyTypePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserProfiles
 * const userProfiles = await prisma.userProfile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more UserProfiles
   * const userProfiles = await prisma.userProfile.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auth`: Exposes CRUD operations for the **Auth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auths
    * const auths = await prisma.auth.findMany()
    * ```
    */
  get auth(): Prisma.AuthDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.claim`: Exposes CRUD operations for the **Claim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Claims
    * const claims = await prisma.claim.findMany()
    * ```
    */
  get claim(): Prisma.ClaimDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.policyType`: Exposes CRUD operations for the **PolicyType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PolicyTypes
    * const policyTypes = await prisma.policyType.findMany()
    * ```
    */
  get policyType(): Prisma.PolicyTypeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    UserProfile: 'UserProfile',
    Auth: 'Auth',
    Customer: 'Customer',
    Employee: 'Employee',
    Claim: 'Claim',
    PolicyType: 'PolicyType'
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
      modelProps: "userProfile" | "auth" | "customer" | "employee" | "claim" | "policyType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Auth: {
        payload: Prisma.$AuthPayload<ExtArgs>
        fields: Prisma.AuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          findFirst: {
            args: Prisma.AuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          findMany: {
            args: Prisma.AuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          create: {
            args: Prisma.AuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          createMany: {
            args: Prisma.AuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          delete: {
            args: Prisma.AuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          update: {
            args: Prisma.AuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          deleteMany: {
            args: Prisma.AuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>[]
          }
          upsert: {
            args: Prisma.AuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthPayload>
          }
          aggregate: {
            args: Prisma.AuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth>
          }
          groupBy: {
            args: Prisma.AuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthCountArgs<ExtArgs>
            result: $Utils.Optional<AuthCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Claim: {
        payload: Prisma.$ClaimPayload<ExtArgs>
        fields: Prisma.ClaimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findFirst: {
            args: Prisma.ClaimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          findMany: {
            args: Prisma.ClaimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          create: {
            args: Prisma.ClaimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          createMany: {
            args: Prisma.ClaimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaimCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          delete: {
            args: Prisma.ClaimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          update: {
            args: Prisma.ClaimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          deleteMany: {
            args: Prisma.ClaimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClaimUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>[]
          }
          upsert: {
            args: Prisma.ClaimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimPayload>
          }
          aggregate: {
            args: Prisma.ClaimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaim>
          }
          groupBy: {
            args: Prisma.ClaimGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimCountAggregateOutputType> | number
          }
        }
      }
      PolicyType: {
        payload: Prisma.$PolicyTypePayload<ExtArgs>
        fields: Prisma.PolicyTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          findFirst: {
            args: Prisma.PolicyTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          findMany: {
            args: Prisma.PolicyTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>[]
          }
          create: {
            args: Prisma.PolicyTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          createMany: {
            args: Prisma.PolicyTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>[]
          }
          delete: {
            args: Prisma.PolicyTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          update: {
            args: Prisma.PolicyTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          deleteMany: {
            args: Prisma.PolicyTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PolicyTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>[]
          }
          upsert: {
            args: Prisma.PolicyTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyTypePayload>
          }
          aggregate: {
            args: Prisma.PolicyTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicyType>
          }
          groupBy: {
            args: Prisma.PolicyTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyTypeCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyTypeCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    userProfile?: UserProfileOmit
    auth?: AuthOmit
    customer?: CustomerOmit
    employee?: EmployeeOmit
    claim?: ClaimOmit
    policyType?: PolicyTypeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    claims: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | CustomerCountOutputTypeCountClaimsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    claims: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | EmployeeCountOutputTypeCountClaimsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }


  /**
   * Count Type PolicyTypeCountOutputType
   */

  export type PolicyTypeCountOutputType = {
    claims: number
  }

  export type PolicyTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | PolicyTypeCountOutputTypeCountClaimsArgs
  }

  // Custom InputTypes
  /**
   * PolicyTypeCountOutputType without action
   */
  export type PolicyTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyTypeCountOutputType
     */
    select?: PolicyTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PolicyTypeCountOutputType without action
   */
  export type PolicyTypeCountOutputTypeCountClaimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    id: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    id: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: number | null
    auth_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: number | null
    auth_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    data: number
    auth_id: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    id?: true
  }

  export type UserProfileSumAggregateInputType = {
    id?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    auth_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    auth_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    data?: true
    auth_id?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: number
    data: JsonValue | null
    auth_id: string
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    auth_id?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auth?: boolean | UserProfile$authArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    auth_id?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auth?: boolean | UserProfile$authArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    auth_id?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auth?: boolean | UserProfile$authArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    data?: boolean
    auth_id?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "auth_id" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | UserProfile$authArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | UserProfile$authArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth?: boolean | UserProfile$authArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      auth: Prisma.$AuthPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Prisma.JsonValue | null
      auth_id: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth<T extends UserProfile$authArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$authArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'Int'>
    readonly data: FieldRef<"UserProfile", 'Json'>
    readonly auth_id: FieldRef<"UserProfile", 'String'>
    readonly metadata: FieldRef<"UserProfile", 'Json'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile.auth
   */
  export type UserProfile$authArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    where?: AuthWhereInput
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model Auth
   */

  export type AggregateAuth = {
    _count: AuthCountAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  export type AuthMinAggregateOutputType = {
    id: string | null
    salt: string | null
    current_hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthMaxAggregateOutputType = {
    id: string | null
    salt: string | null
    current_hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthCountAggregateOutputType = {
    id: number
    salt: number
    current_hash: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthMinAggregateInputType = {
    id?: true
    salt?: true
    current_hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthMaxAggregateInputType = {
    id?: true
    salt?: true
    current_hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthCountAggregateInputType = {
    id?: true
    salt?: true
    current_hash?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auth to aggregate.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auths
    **/
    _count?: true | AuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthMaxAggregateInputType
  }

  export type GetAuthAggregateType<T extends AuthAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth[P]>
      : GetScalarType<T[P], AggregateAuth[P]>
  }




  export type AuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthWhereInput
    orderBy?: AuthOrderByWithAggregationInput | AuthOrderByWithAggregationInput[]
    by: AuthScalarFieldEnum[] | AuthScalarFieldEnum
    having?: AuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthCountAggregateInputType | true
    _min?: AuthMinAggregateInputType
    _max?: AuthMaxAggregateInputType
  }

  export type AuthGroupByOutputType = {
    id: string
    salt: string
    current_hash: string
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: AuthCountAggregateOutputType | null
    _min: AuthMinAggregateOutputType | null
    _max: AuthMaxAggregateOutputType | null
  }

  type GetAuthGroupByPayload<T extends AuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthGroupByOutputType[P]>
            : GetScalarType<T[P], AuthGroupByOutputType[P]>
        }
      >
    >


  export type AuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salt?: boolean
    current_hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userProfile?: boolean | Auth$userProfileArgs<ExtArgs>
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salt?: boolean
    current_hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salt?: boolean
    current_hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["auth"]>

  export type AuthSelectScalar = {
    id?: boolean
    salt?: boolean
    current_hash?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "salt" | "current_hash" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["auth"]>
  export type AuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProfile?: boolean | Auth$userProfileArgs<ExtArgs>
  }
  export type AuthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auth"
    objects: {
      userProfile: Prisma.$UserProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salt: string
      current_hash: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["auth"]>
    composites: {}
  }

  type AuthGetPayload<S extends boolean | null | undefined | AuthDefaultArgs> = $Result.GetResult<Prisma.$AuthPayload, S>

  type AuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthCountAggregateInputType | true
    }

  export interface AuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auth'], meta: { name: 'Auth' } }
    /**
     * Find zero or one Auth that matches the filter.
     * @param {AuthFindUniqueArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthFindUniqueArgs>(args: SelectSubset<T, AuthFindUniqueArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthFindUniqueOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindFirstArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthFindFirstArgs>(args?: SelectSubset<T, AuthFindFirstArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindFirstOrThrowArgs} args - Arguments to find a Auth
     * @example
     * // Get one Auth
     * const auth = await prisma.auth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auths
     * const auths = await prisma.auth.findMany()
     * 
     * // Get first 10 Auths
     * const auths = await prisma.auth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authWithIdOnly = await prisma.auth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthFindManyArgs>(args?: SelectSubset<T, AuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth.
     * @param {AuthCreateArgs} args - Arguments to create a Auth.
     * @example
     * // Create one Auth
     * const Auth = await prisma.auth.create({
     *   data: {
     *     // ... data to create a Auth
     *   }
     * })
     * 
     */
    create<T extends AuthCreateArgs>(args: SelectSubset<T, AuthCreateArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auths.
     * @param {AuthCreateManyArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthCreateManyArgs>(args?: SelectSubset<T, AuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auths and returns the data saved in the database.
     * @param {AuthCreateManyAndReturnArgs} args - Arguments to create many Auths.
     * @example
     * // Create many Auths
     * const auth = await prisma.auth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auths and only return the `id`
     * const authWithIdOnly = await prisma.auth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth.
     * @param {AuthDeleteArgs} args - Arguments to delete one Auth.
     * @example
     * // Delete one Auth
     * const Auth = await prisma.auth.delete({
     *   where: {
     *     // ... filter to delete one Auth
     *   }
     * })
     * 
     */
    delete<T extends AuthDeleteArgs>(args: SelectSubset<T, AuthDeleteArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth.
     * @param {AuthUpdateArgs} args - Arguments to update one Auth.
     * @example
     * // Update one Auth
     * const auth = await prisma.auth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthUpdateArgs>(args: SelectSubset<T, AuthUpdateArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auths.
     * @param {AuthDeleteManyArgs} args - Arguments to filter Auths to delete.
     * @example
     * // Delete a few Auths
     * const { count } = await prisma.auth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthDeleteManyArgs>(args?: SelectSubset<T, AuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthUpdateManyArgs>(args: SelectSubset<T, AuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auths and returns the data updated in the database.
     * @param {AuthUpdateManyAndReturnArgs} args - Arguments to update many Auths.
     * @example
     * // Update many Auths
     * const auth = await prisma.auth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auths and only return the `id`
     * const authWithIdOnly = await prisma.auth.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth.
     * @param {AuthUpsertArgs} args - Arguments to update or create a Auth.
     * @example
     * // Update or create a Auth
     * const auth = await prisma.auth.upsert({
     *   create: {
     *     // ... data to create a Auth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth we want to update
     *   }
     * })
     */
    upsert<T extends AuthUpsertArgs>(args: SelectSubset<T, AuthUpsertArgs<ExtArgs>>): Prisma__AuthClient<$Result.GetResult<Prisma.$AuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthCountArgs} args - Arguments to filter Auths to count.
     * @example
     * // Count the number of Auths
     * const count = await prisma.auth.count({
     *   where: {
     *     // ... the filter for the Auths we want to count
     *   }
     * })
    **/
    count<T extends AuthCountArgs>(
      args?: Subset<T, AuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthAggregateArgs>(args: Subset<T, AuthAggregateArgs>): Prisma.PrismaPromise<GetAuthAggregateType<T>>

    /**
     * Group by Auth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthGroupByArgs} args - Group by arguments.
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
      T extends AuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthGroupByArgs['orderBy'] }
        : { orderBy?: AuthGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auth model
   */
  readonly fields: AuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userProfile<T extends Auth$userProfileArgs<ExtArgs> = {}>(args?: Subset<T, Auth$userProfileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Auth model
   */
  interface AuthFieldRefs {
    readonly id: FieldRef<"Auth", 'String'>
    readonly salt: FieldRef<"Auth", 'String'>
    readonly current_hash: FieldRef<"Auth", 'String'>
    readonly metadata: FieldRef<"Auth", 'Json'>
    readonly createdAt: FieldRef<"Auth", 'DateTime'>
    readonly updatedAt: FieldRef<"Auth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Auth findUnique
   */
  export type AuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth findUniqueOrThrow
   */
  export type AuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth findFirst
   */
  export type AuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth findFirstOrThrow
   */
  export type AuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auth to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auths.
     */
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth findMany
   */
  export type AuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter, which Auths to fetch.
     */
    where?: AuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auths to fetch.
     */
    orderBy?: AuthOrderByWithRelationInput | AuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auths.
     */
    cursor?: AuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auths.
     */
    skip?: number
    distinct?: AuthScalarFieldEnum | AuthScalarFieldEnum[]
  }

  /**
   * Auth create
   */
  export type AuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * The data needed to create a Auth.
     */
    data: XOR<AuthCreateInput, AuthUncheckedCreateInput>
  }

  /**
   * Auth createMany
   */
  export type AuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auths.
     */
    data: AuthCreateManyInput | AuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auth createManyAndReturn
   */
  export type AuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data used to create many Auths.
     */
    data: AuthCreateManyInput | AuthCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auth update
   */
  export type AuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * The data needed to update a Auth.
     */
    data: XOR<AuthUpdateInput, AuthUncheckedUpdateInput>
    /**
     * Choose, which Auth to update.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth updateMany
   */
  export type AuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auths.
     */
    data: XOR<AuthUpdateManyMutationInput, AuthUncheckedUpdateManyInput>
    /**
     * Filter which Auths to update
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to update.
     */
    limit?: number
  }

  /**
   * Auth updateManyAndReturn
   */
  export type AuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * The data used to update Auths.
     */
    data: XOR<AuthUpdateManyMutationInput, AuthUncheckedUpdateManyInput>
    /**
     * Filter which Auths to update
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to update.
     */
    limit?: number
  }

  /**
   * Auth upsert
   */
  export type AuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * The filter to search for the Auth to update in case it exists.
     */
    where: AuthWhereUniqueInput
    /**
     * In case the Auth found by the `where` argument doesn't exist, create a new Auth with this data.
     */
    create: XOR<AuthCreateInput, AuthUncheckedCreateInput>
    /**
     * In case the Auth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthUpdateInput, AuthUncheckedUpdateInput>
  }

  /**
   * Auth delete
   */
  export type AuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
    /**
     * Filter which Auth to delete.
     */
    where: AuthWhereUniqueInput
  }

  /**
   * Auth deleteMany
   */
  export type AuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auths to delete
     */
    where?: AuthWhereInput
    /**
     * Limit how many Auths to delete.
     */
    limit?: number
  }

  /**
   * Auth.userProfile
   */
  export type Auth$userProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * Auth without action
   */
  export type AuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth
     */
    select?: AuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auth
     */
    omit?: AuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    number: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    city: string | null
    number: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    city: number
    number: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    city?: true
    number?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    city?: true
    number?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    city?: true
    number?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    city: string | null
    number: string | null
    email: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    number?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    claims?: boolean | Customer$claimsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    number?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    city?: boolean
    number?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    city?: boolean
    number?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "city" | "number" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | Customer$claimsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      claims: Prisma.$ClaimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      city: string | null
      number: string | null
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    claims<T extends Customer$claimsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly city: FieldRef<"Customer", 'String'>
    readonly number: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.claims
   */
  export type Customer$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    name: string | null
    position: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    position: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    position: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    position?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    position?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    name: string
    position: string | null
    data: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    claims?: boolean | Employee$claimsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    position?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "position" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | Employee$claimsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      claims: Prisma.$ClaimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      position: string | null
      data: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    claims<T extends Employee$claimsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly position: FieldRef<"Employee", 'String'>
    readonly data: FieldRef<"Employee", 'Json'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.claims
   */
  export type Employee$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Claim
   */

  export type AggregateClaim = {
    _count: ClaimCountAggregateOutputType | null
    _avg: ClaimAvgAggregateOutputType | null
    _sum: ClaimSumAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  export type ClaimAvgAggregateOutputType = {
    id: number | null
    customer_id: number | null
    employee_id: number | null
    policy_id: number | null
  }

  export type ClaimSumAggregateOutputType = {
    id: number | null
    customer_id: number | null
    employee_id: number | null
    policy_id: number | null
  }

  export type ClaimMinAggregateOutputType = {
    id: number | null
    details: string | null
    customer_id: number | null
    employee_id: number | null
    policy_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClaimMaxAggregateOutputType = {
    id: number | null
    details: string | null
    customer_id: number | null
    employee_id: number | null
    policy_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClaimCountAggregateOutputType = {
    id: number
    details: number
    customer_id: number
    employee_id: number
    docs: number
    policy_id: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClaimAvgAggregateInputType = {
    id?: true
    customer_id?: true
    employee_id?: true
    policy_id?: true
  }

  export type ClaimSumAggregateInputType = {
    id?: true
    customer_id?: true
    employee_id?: true
    policy_id?: true
  }

  export type ClaimMinAggregateInputType = {
    id?: true
    details?: true
    customer_id?: true
    employee_id?: true
    policy_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClaimMaxAggregateInputType = {
    id?: true
    details?: true
    customer_id?: true
    employee_id?: true
    policy_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClaimCountAggregateInputType = {
    id?: true
    details?: true
    customer_id?: true
    employee_id?: true
    docs?: true
    policy_id?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClaimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claim to aggregate.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Claims
    **/
    _count?: true | ClaimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimMaxAggregateInputType
  }

  export type GetClaimAggregateType<T extends ClaimAggregateArgs> = {
        [P in keyof T & keyof AggregateClaim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaim[P]>
      : GetScalarType<T[P], AggregateClaim[P]>
  }




  export type ClaimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithAggregationInput | ClaimOrderByWithAggregationInput[]
    by: ClaimScalarFieldEnum[] | ClaimScalarFieldEnum
    having?: ClaimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimCountAggregateInputType | true
    _avg?: ClaimAvgAggregateInputType
    _sum?: ClaimSumAggregateInputType
    _min?: ClaimMinAggregateInputType
    _max?: ClaimMaxAggregateInputType
  }

  export type ClaimGroupByOutputType = {
    id: number
    details: string | null
    customer_id: number
    employee_id: number
    docs: JsonValue | null
    policy_id: number
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ClaimCountAggregateOutputType | null
    _avg: ClaimAvgAggregateOutputType | null
    _sum: ClaimSumAggregateOutputType | null
    _min: ClaimMinAggregateOutputType | null
    _max: ClaimMaxAggregateOutputType | null
  }

  type GetClaimGroupByPayload<T extends ClaimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimGroupByOutputType[P]>
        }
      >
    >


  export type ClaimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    details?: boolean
    customer_id?: boolean
    employee_id?: boolean
    docs?: boolean
    policy_id?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    policyType?: boolean | PolicyTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    details?: boolean
    customer_id?: boolean
    employee_id?: boolean
    docs?: boolean
    policy_id?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    policyType?: boolean | PolicyTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    details?: boolean
    customer_id?: boolean
    employee_id?: boolean
    docs?: boolean
    policy_id?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    policyType?: boolean | PolicyTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claim"]>

  export type ClaimSelectScalar = {
    id?: boolean
    details?: boolean
    customer_id?: boolean
    employee_id?: boolean
    docs?: boolean
    policy_id?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClaimOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "details" | "customer_id" | "employee_id" | "docs" | "policy_id" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["claim"]>
  export type ClaimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    policyType?: boolean | PolicyTypeDefaultArgs<ExtArgs>
  }
  export type ClaimIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    policyType?: boolean | PolicyTypeDefaultArgs<ExtArgs>
  }
  export type ClaimIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    policyType?: boolean | PolicyTypeDefaultArgs<ExtArgs>
  }

  export type $ClaimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Claim"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
      policyType: Prisma.$PolicyTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      details: string | null
      customer_id: number
      employee_id: number
      docs: Prisma.JsonValue | null
      policy_id: number
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["claim"]>
    composites: {}
  }

  type ClaimGetPayload<S extends boolean | null | undefined | ClaimDefaultArgs> = $Result.GetResult<Prisma.$ClaimPayload, S>

  type ClaimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClaimFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClaimCountAggregateInputType | true
    }

  export interface ClaimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Claim'], meta: { name: 'Claim' } }
    /**
     * Find zero or one Claim that matches the filter.
     * @param {ClaimFindUniqueArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaimFindUniqueArgs>(args: SelectSubset<T, ClaimFindUniqueArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Claim that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClaimFindUniqueOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaimFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaimFindFirstArgs>(args?: SelectSubset<T, ClaimFindFirstArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Claim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindFirstOrThrowArgs} args - Arguments to find a Claim
     * @example
     * // Get one Claim
     * const claim = await prisma.claim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaimFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaimFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Claims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Claims
     * const claims = await prisma.claim.findMany()
     * 
     * // Get first 10 Claims
     * const claims = await prisma.claim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimWithIdOnly = await prisma.claim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClaimFindManyArgs>(args?: SelectSubset<T, ClaimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Claim.
     * @param {ClaimCreateArgs} args - Arguments to create a Claim.
     * @example
     * // Create one Claim
     * const Claim = await prisma.claim.create({
     *   data: {
     *     // ... data to create a Claim
     *   }
     * })
     * 
     */
    create<T extends ClaimCreateArgs>(args: SelectSubset<T, ClaimCreateArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Claims.
     * @param {ClaimCreateManyArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaimCreateManyArgs>(args?: SelectSubset<T, ClaimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Claims and returns the data saved in the database.
     * @param {ClaimCreateManyAndReturnArgs} args - Arguments to create many Claims.
     * @example
     * // Create many Claims
     * const claim = await prisma.claim.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaimCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Claim.
     * @param {ClaimDeleteArgs} args - Arguments to delete one Claim.
     * @example
     * // Delete one Claim
     * const Claim = await prisma.claim.delete({
     *   where: {
     *     // ... filter to delete one Claim
     *   }
     * })
     * 
     */
    delete<T extends ClaimDeleteArgs>(args: SelectSubset<T, ClaimDeleteArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Claim.
     * @param {ClaimUpdateArgs} args - Arguments to update one Claim.
     * @example
     * // Update one Claim
     * const claim = await prisma.claim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaimUpdateArgs>(args: SelectSubset<T, ClaimUpdateArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Claims.
     * @param {ClaimDeleteManyArgs} args - Arguments to filter Claims to delete.
     * @example
     * // Delete a few Claims
     * const { count } = await prisma.claim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaimDeleteManyArgs>(args?: SelectSubset<T, ClaimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaimUpdateManyArgs>(args: SelectSubset<T, ClaimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Claims and returns the data updated in the database.
     * @param {ClaimUpdateManyAndReturnArgs} args - Arguments to update many Claims.
     * @example
     * // Update many Claims
     * const claim = await prisma.claim.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Claims and only return the `id`
     * const claimWithIdOnly = await prisma.claim.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClaimUpdateManyAndReturnArgs>(args: SelectSubset<T, ClaimUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Claim.
     * @param {ClaimUpsertArgs} args - Arguments to update or create a Claim.
     * @example
     * // Update or create a Claim
     * const claim = await prisma.claim.upsert({
     *   create: {
     *     // ... data to create a Claim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Claim we want to update
     *   }
     * })
     */
    upsert<T extends ClaimUpsertArgs>(args: SelectSubset<T, ClaimUpsertArgs<ExtArgs>>): Prisma__ClaimClient<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Claims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimCountArgs} args - Arguments to filter Claims to count.
     * @example
     * // Count the number of Claims
     * const count = await prisma.claim.count({
     *   where: {
     *     // ... the filter for the Claims we want to count
     *   }
     * })
    **/
    count<T extends ClaimCountArgs>(
      args?: Subset<T, ClaimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaimAggregateArgs>(args: Subset<T, ClaimAggregateArgs>): Prisma.PrismaPromise<GetClaimAggregateType<T>>

    /**
     * Group by Claim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimGroupByArgs} args - Group by arguments.
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
      T extends ClaimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimGroupByArgs['orderBy'] }
        : { orderBy?: ClaimGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClaimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Claim model
   */
  readonly fields: ClaimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Claim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    policyType<T extends PolicyTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PolicyTypeDefaultArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Claim model
   */
  interface ClaimFieldRefs {
    readonly id: FieldRef<"Claim", 'Int'>
    readonly details: FieldRef<"Claim", 'String'>
    readonly customer_id: FieldRef<"Claim", 'Int'>
    readonly employee_id: FieldRef<"Claim", 'Int'>
    readonly docs: FieldRef<"Claim", 'Json'>
    readonly policy_id: FieldRef<"Claim", 'Int'>
    readonly metadata: FieldRef<"Claim", 'Json'>
    readonly createdAt: FieldRef<"Claim", 'DateTime'>
    readonly updatedAt: FieldRef<"Claim", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Claim findUnique
   */
  export type ClaimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim findUniqueOrThrow
   */
  export type ClaimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim findFirst
   */
  export type ClaimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim findFirstOrThrow
   */
  export type ClaimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claim to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Claims.
     */
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim findMany
   */
  export type ClaimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter, which Claims to fetch.
     */
    where?: ClaimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Claims to fetch.
     */
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Claims.
     */
    cursor?: ClaimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Claims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Claims.
     */
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * Claim create
   */
  export type ClaimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to create a Claim.
     */
    data: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
  }

  /**
   * Claim createMany
   */
  export type ClaimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Claims.
     */
    data: ClaimCreateManyInput | ClaimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Claim createManyAndReturn
   */
  export type ClaimCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * The data used to create many Claims.
     */
    data: ClaimCreateManyInput | ClaimCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Claim update
   */
  export type ClaimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The data needed to update a Claim.
     */
    data: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
    /**
     * Choose, which Claim to update.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim updateMany
   */
  export type ClaimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to update.
     */
    limit?: number
  }

  /**
   * Claim updateManyAndReturn
   */
  export type ClaimUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * The data used to update Claims.
     */
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyInput>
    /**
     * Filter which Claims to update
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Claim upsert
   */
  export type ClaimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * The filter to search for the Claim to update in case it exists.
     */
    where: ClaimWhereUniqueInput
    /**
     * In case the Claim found by the `where` argument doesn't exist, create a new Claim with this data.
     */
    create: XOR<ClaimCreateInput, ClaimUncheckedCreateInput>
    /**
     * In case the Claim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimUpdateInput, ClaimUncheckedUpdateInput>
  }

  /**
   * Claim delete
   */
  export type ClaimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    /**
     * Filter which Claim to delete.
     */
    where: ClaimWhereUniqueInput
  }

  /**
   * Claim deleteMany
   */
  export type ClaimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Claims to delete
     */
    where?: ClaimWhereInput
    /**
     * Limit how many Claims to delete.
     */
    limit?: number
  }

  /**
   * Claim without action
   */
  export type ClaimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
  }


  /**
   * Model PolicyType
   */

  export type AggregatePolicyType = {
    _count: PolicyTypeCountAggregateOutputType | null
    _avg: PolicyTypeAvgAggregateOutputType | null
    _sum: PolicyTypeSumAggregateOutputType | null
    _min: PolicyTypeMinAggregateOutputType | null
    _max: PolicyTypeMaxAggregateOutputType | null
  }

  export type PolicyTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type PolicyTypeSumAggregateOutputType = {
    id: number | null
  }

  export type PolicyTypeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicyTypeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PolicyTypeCountAggregateOutputType = {
    id: number
    data: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PolicyTypeAvgAggregateInputType = {
    id?: true
  }

  export type PolicyTypeSumAggregateInputType = {
    id?: true
  }

  export type PolicyTypeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicyTypeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PolicyTypeCountAggregateInputType = {
    id?: true
    data?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PolicyTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolicyType to aggregate.
     */
    where?: PolicyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTypes to fetch.
     */
    orderBy?: PolicyTypeOrderByWithRelationInput | PolicyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PolicyTypes
    **/
    _count?: true | PolicyTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicyTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyTypeMaxAggregateInputType
  }

  export type GetPolicyTypeAggregateType<T extends PolicyTypeAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicyType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicyType[P]>
      : GetScalarType<T[P], AggregatePolicyType[P]>
  }




  export type PolicyTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyTypeWhereInput
    orderBy?: PolicyTypeOrderByWithAggregationInput | PolicyTypeOrderByWithAggregationInput[]
    by: PolicyTypeScalarFieldEnum[] | PolicyTypeScalarFieldEnum
    having?: PolicyTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyTypeCountAggregateInputType | true
    _avg?: PolicyTypeAvgAggregateInputType
    _sum?: PolicyTypeSumAggregateInputType
    _min?: PolicyTypeMinAggregateInputType
    _max?: PolicyTypeMaxAggregateInputType
  }

  export type PolicyTypeGroupByOutputType = {
    id: number
    data: JsonValue | null
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PolicyTypeCountAggregateOutputType | null
    _avg: PolicyTypeAvgAggregateOutputType | null
    _sum: PolicyTypeSumAggregateOutputType | null
    _min: PolicyTypeMinAggregateOutputType | null
    _max: PolicyTypeMaxAggregateOutputType | null
  }

  type GetPolicyTypeGroupByPayload<T extends PolicyTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyTypeGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyTypeGroupByOutputType[P]>
        }
      >
    >


  export type PolicyTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    claims?: boolean | PolicyType$claimsArgs<ExtArgs>
    _count?: boolean | PolicyTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policyType"]>

  export type PolicyTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["policyType"]>

  export type PolicyTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["policyType"]>

  export type PolicyTypeSelectScalar = {
    id?: boolean
    data?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PolicyTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "metadata" | "createdAt" | "updatedAt", ExtArgs["result"]["policyType"]>
  export type PolicyTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    claims?: boolean | PolicyType$claimsArgs<ExtArgs>
    _count?: boolean | PolicyTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PolicyTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PolicyTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PolicyTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PolicyType"
    objects: {
      claims: Prisma.$ClaimPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Prisma.JsonValue | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["policyType"]>
    composites: {}
  }

  type PolicyTypeGetPayload<S extends boolean | null | undefined | PolicyTypeDefaultArgs> = $Result.GetResult<Prisma.$PolicyTypePayload, S>

  type PolicyTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PolicyTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PolicyTypeCountAggregateInputType | true
    }

  export interface PolicyTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PolicyType'], meta: { name: 'PolicyType' } }
    /**
     * Find zero or one PolicyType that matches the filter.
     * @param {PolicyTypeFindUniqueArgs} args - Arguments to find a PolicyType
     * @example
     * // Get one PolicyType
     * const policyType = await prisma.policyType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyTypeFindUniqueArgs>(args: SelectSubset<T, PolicyTypeFindUniqueArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PolicyType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PolicyTypeFindUniqueOrThrowArgs} args - Arguments to find a PolicyType
     * @example
     * // Get one PolicyType
     * const policyType = await prisma.policyType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PolicyType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeFindFirstArgs} args - Arguments to find a PolicyType
     * @example
     * // Get one PolicyType
     * const policyType = await prisma.policyType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyTypeFindFirstArgs>(args?: SelectSubset<T, PolicyTypeFindFirstArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PolicyType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeFindFirstOrThrowArgs} args - Arguments to find a PolicyType
     * @example
     * // Get one PolicyType
     * const policyType = await prisma.policyType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PolicyTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PolicyTypes
     * const policyTypes = await prisma.policyType.findMany()
     * 
     * // Get first 10 PolicyTypes
     * const policyTypes = await prisma.policyType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyTypeWithIdOnly = await prisma.policyType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyTypeFindManyArgs>(args?: SelectSubset<T, PolicyTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PolicyType.
     * @param {PolicyTypeCreateArgs} args - Arguments to create a PolicyType.
     * @example
     * // Create one PolicyType
     * const PolicyType = await prisma.policyType.create({
     *   data: {
     *     // ... data to create a PolicyType
     *   }
     * })
     * 
     */
    create<T extends PolicyTypeCreateArgs>(args: SelectSubset<T, PolicyTypeCreateArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PolicyTypes.
     * @param {PolicyTypeCreateManyArgs} args - Arguments to create many PolicyTypes.
     * @example
     * // Create many PolicyTypes
     * const policyType = await prisma.policyType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyTypeCreateManyArgs>(args?: SelectSubset<T, PolicyTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PolicyTypes and returns the data saved in the database.
     * @param {PolicyTypeCreateManyAndReturnArgs} args - Arguments to create many PolicyTypes.
     * @example
     * // Create many PolicyTypes
     * const policyType = await prisma.policyType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PolicyTypes and only return the `id`
     * const policyTypeWithIdOnly = await prisma.policyType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PolicyType.
     * @param {PolicyTypeDeleteArgs} args - Arguments to delete one PolicyType.
     * @example
     * // Delete one PolicyType
     * const PolicyType = await prisma.policyType.delete({
     *   where: {
     *     // ... filter to delete one PolicyType
     *   }
     * })
     * 
     */
    delete<T extends PolicyTypeDeleteArgs>(args: SelectSubset<T, PolicyTypeDeleteArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PolicyType.
     * @param {PolicyTypeUpdateArgs} args - Arguments to update one PolicyType.
     * @example
     * // Update one PolicyType
     * const policyType = await prisma.policyType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyTypeUpdateArgs>(args: SelectSubset<T, PolicyTypeUpdateArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PolicyTypes.
     * @param {PolicyTypeDeleteManyArgs} args - Arguments to filter PolicyTypes to delete.
     * @example
     * // Delete a few PolicyTypes
     * const { count } = await prisma.policyType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyTypeDeleteManyArgs>(args?: SelectSubset<T, PolicyTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolicyTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PolicyTypes
     * const policyType = await prisma.policyType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyTypeUpdateManyArgs>(args: SelectSubset<T, PolicyTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PolicyTypes and returns the data updated in the database.
     * @param {PolicyTypeUpdateManyAndReturnArgs} args - Arguments to update many PolicyTypes.
     * @example
     * // Update many PolicyTypes
     * const policyType = await prisma.policyType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PolicyTypes and only return the `id`
     * const policyTypeWithIdOnly = await prisma.policyType.updateManyAndReturn({
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
    updateManyAndReturn<T extends PolicyTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, PolicyTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PolicyType.
     * @param {PolicyTypeUpsertArgs} args - Arguments to update or create a PolicyType.
     * @example
     * // Update or create a PolicyType
     * const policyType = await prisma.policyType.upsert({
     *   create: {
     *     // ... data to create a PolicyType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PolicyType we want to update
     *   }
     * })
     */
    upsert<T extends PolicyTypeUpsertArgs>(args: SelectSubset<T, PolicyTypeUpsertArgs<ExtArgs>>): Prisma__PolicyTypeClient<$Result.GetResult<Prisma.$PolicyTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PolicyTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeCountArgs} args - Arguments to filter PolicyTypes to count.
     * @example
     * // Count the number of PolicyTypes
     * const count = await prisma.policyType.count({
     *   where: {
     *     // ... the filter for the PolicyTypes we want to count
     *   }
     * })
    **/
    count<T extends PolicyTypeCountArgs>(
      args?: Subset<T, PolicyTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PolicyType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PolicyTypeAggregateArgs>(args: Subset<T, PolicyTypeAggregateArgs>): Prisma.PrismaPromise<GetPolicyTypeAggregateType<T>>

    /**
     * Group by PolicyType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyTypeGroupByArgs} args - Group by arguments.
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
      T extends PolicyTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyTypeGroupByArgs['orderBy'] }
        : { orderBy?: PolicyTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PolicyTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PolicyType model
   */
  readonly fields: PolicyTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PolicyType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    claims<T extends PolicyType$claimsArgs<ExtArgs> = {}>(args?: Subset<T, PolicyType$claimsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PolicyType model
   */
  interface PolicyTypeFieldRefs {
    readonly id: FieldRef<"PolicyType", 'Int'>
    readonly data: FieldRef<"PolicyType", 'Json'>
    readonly metadata: FieldRef<"PolicyType", 'Json'>
    readonly createdAt: FieldRef<"PolicyType", 'DateTime'>
    readonly updatedAt: FieldRef<"PolicyType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PolicyType findUnique
   */
  export type PolicyTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyType
     */
    omit?: PolicyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * Filter, which PolicyType to fetch.
     */
    where: PolicyTypeWhereUniqueInput
  }

  /**
   * PolicyType findUniqueOrThrow
   */
  export type PolicyTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyType
     */
    omit?: PolicyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * Filter, which PolicyType to fetch.
     */
    where: PolicyTypeWhereUniqueInput
  }

  /**
   * PolicyType findFirst
   */
  export type PolicyTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyType
     */
    omit?: PolicyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * Filter, which PolicyType to fetch.
     */
    where?: PolicyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTypes to fetch.
     */
    orderBy?: PolicyTypeOrderByWithRelationInput | PolicyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicyTypes.
     */
    cursor?: PolicyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyTypes.
     */
    distinct?: PolicyTypeScalarFieldEnum | PolicyTypeScalarFieldEnum[]
  }

  /**
   * PolicyType findFirstOrThrow
   */
  export type PolicyTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyType
     */
    omit?: PolicyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * Filter, which PolicyType to fetch.
     */
    where?: PolicyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTypes to fetch.
     */
    orderBy?: PolicyTypeOrderByWithRelationInput | PolicyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PolicyTypes.
     */
    cursor?: PolicyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PolicyTypes.
     */
    distinct?: PolicyTypeScalarFieldEnum | PolicyTypeScalarFieldEnum[]
  }

  /**
   * PolicyType findMany
   */
  export type PolicyTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyType
     */
    omit?: PolicyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * Filter, which PolicyTypes to fetch.
     */
    where?: PolicyTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PolicyTypes to fetch.
     */
    orderBy?: PolicyTypeOrderByWithRelationInput | PolicyTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PolicyTypes.
     */
    cursor?: PolicyTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PolicyTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PolicyTypes.
     */
    skip?: number
    distinct?: PolicyTypeScalarFieldEnum | PolicyTypeScalarFieldEnum[]
  }

  /**
   * PolicyType create
   */
  export type PolicyTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyType
     */
    omit?: PolicyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a PolicyType.
     */
    data: XOR<PolicyTypeCreateInput, PolicyTypeUncheckedCreateInput>
  }

  /**
   * PolicyType createMany
   */
  export type PolicyTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PolicyTypes.
     */
    data: PolicyTypeCreateManyInput | PolicyTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PolicyType createManyAndReturn
   */
  export type PolicyTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyType
     */
    omit?: PolicyTypeOmit<ExtArgs> | null
    /**
     * The data used to create many PolicyTypes.
     */
    data: PolicyTypeCreateManyInput | PolicyTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PolicyType update
   */
  export type PolicyTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyType
     */
    omit?: PolicyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a PolicyType.
     */
    data: XOR<PolicyTypeUpdateInput, PolicyTypeUncheckedUpdateInput>
    /**
     * Choose, which PolicyType to update.
     */
    where: PolicyTypeWhereUniqueInput
  }

  /**
   * PolicyType updateMany
   */
  export type PolicyTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PolicyTypes.
     */
    data: XOR<PolicyTypeUpdateManyMutationInput, PolicyTypeUncheckedUpdateManyInput>
    /**
     * Filter which PolicyTypes to update
     */
    where?: PolicyTypeWhereInput
    /**
     * Limit how many PolicyTypes to update.
     */
    limit?: number
  }

  /**
   * PolicyType updateManyAndReturn
   */
  export type PolicyTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyType
     */
    omit?: PolicyTypeOmit<ExtArgs> | null
    /**
     * The data used to update PolicyTypes.
     */
    data: XOR<PolicyTypeUpdateManyMutationInput, PolicyTypeUncheckedUpdateManyInput>
    /**
     * Filter which PolicyTypes to update
     */
    where?: PolicyTypeWhereInput
    /**
     * Limit how many PolicyTypes to update.
     */
    limit?: number
  }

  /**
   * PolicyType upsert
   */
  export type PolicyTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyType
     */
    omit?: PolicyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the PolicyType to update in case it exists.
     */
    where: PolicyTypeWhereUniqueInput
    /**
     * In case the PolicyType found by the `where` argument doesn't exist, create a new PolicyType with this data.
     */
    create: XOR<PolicyTypeCreateInput, PolicyTypeUncheckedCreateInput>
    /**
     * In case the PolicyType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyTypeUpdateInput, PolicyTypeUncheckedUpdateInput>
  }

  /**
   * PolicyType delete
   */
  export type PolicyTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyType
     */
    omit?: PolicyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
    /**
     * Filter which PolicyType to delete.
     */
    where: PolicyTypeWhereUniqueInput
  }

  /**
   * PolicyType deleteMany
   */
  export type PolicyTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PolicyTypes to delete
     */
    where?: PolicyTypeWhereInput
    /**
     * Limit how many PolicyTypes to delete.
     */
    limit?: number
  }

  /**
   * PolicyType.claims
   */
  export type PolicyType$claimsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Claim
     */
    select?: ClaimSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Claim
     */
    omit?: ClaimOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInclude<ExtArgs> | null
    where?: ClaimWhereInput
    orderBy?: ClaimOrderByWithRelationInput | ClaimOrderByWithRelationInput[]
    cursor?: ClaimWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimScalarFieldEnum | ClaimScalarFieldEnum[]
  }

  /**
   * PolicyType without action
   */
  export type PolicyTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyType
     */
    select?: PolicyTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PolicyType
     */
    omit?: PolicyTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyTypeInclude<ExtArgs> | null
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


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    data: 'data',
    auth_id: 'auth_id',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const AuthScalarFieldEnum: {
    id: 'id',
    salt: 'salt',
    current_hash: 'current_hash',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthScalarFieldEnum = (typeof AuthScalarFieldEnum)[keyof typeof AuthScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    city: 'city',
    number: 'number',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    position: 'position',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const ClaimScalarFieldEnum: {
    id: 'id',
    details: 'details',
    customer_id: 'customer_id',
    employee_id: 'employee_id',
    docs: 'docs',
    policy_id: 'policy_id',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClaimScalarFieldEnum = (typeof ClaimScalarFieldEnum)[keyof typeof ClaimScalarFieldEnum]


  export const PolicyTypeScalarFieldEnum: {
    id: 'id',
    data: 'data',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PolicyTypeScalarFieldEnum = (typeof PolicyTypeScalarFieldEnum)[keyof typeof PolicyTypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: IntFilter<"UserProfile"> | number
    data?: JsonNullableFilter<"UserProfile">
    auth_id?: StringFilter<"UserProfile"> | string
    metadata?: JsonNullableFilter<"UserProfile">
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    auth?: XOR<AuthNullableScalarRelationFilter, AuthWhereInput> | null
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrderInput | SortOrder
    auth_id?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auth?: AuthOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    auth_id?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    data?: JsonNullableFilter<"UserProfile">
    metadata?: JsonNullableFilter<"UserProfile">
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    auth?: XOR<AuthNullableScalarRelationFilter, AuthWhereInput> | null
  }, "id" | "auth_id">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrderInput | SortOrder
    auth_id?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProfile"> | number
    data?: JsonNullableWithAggregatesFilter<"UserProfile">
    auth_id?: StringWithAggregatesFilter<"UserProfile"> | string
    metadata?: JsonNullableWithAggregatesFilter<"UserProfile">
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type AuthWhereInput = {
    AND?: AuthWhereInput | AuthWhereInput[]
    OR?: AuthWhereInput[]
    NOT?: AuthWhereInput | AuthWhereInput[]
    id?: StringFilter<"Auth"> | string
    salt?: StringFilter<"Auth"> | string
    current_hash?: StringFilter<"Auth"> | string
    metadata?: JsonNullableFilter<"Auth">
    createdAt?: DateTimeFilter<"Auth"> | Date | string
    updatedAt?: DateTimeFilter<"Auth"> | Date | string
    userProfile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
  }

  export type AuthOrderByWithRelationInput = {
    id?: SortOrder
    salt?: SortOrder
    current_hash?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userProfile?: UserProfileOrderByWithRelationInput
  }

  export type AuthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthWhereInput | AuthWhereInput[]
    OR?: AuthWhereInput[]
    NOT?: AuthWhereInput | AuthWhereInput[]
    salt?: StringFilter<"Auth"> | string
    current_hash?: StringFilter<"Auth"> | string
    metadata?: JsonNullableFilter<"Auth">
    createdAt?: DateTimeFilter<"Auth"> | Date | string
    updatedAt?: DateTimeFilter<"Auth"> | Date | string
    userProfile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
  }, "id">

  export type AuthOrderByWithAggregationInput = {
    id?: SortOrder
    salt?: SortOrder
    current_hash?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthCountOrderByAggregateInput
    _max?: AuthMaxOrderByAggregateInput
    _min?: AuthMinOrderByAggregateInput
  }

  export type AuthScalarWhereWithAggregatesInput = {
    AND?: AuthScalarWhereWithAggregatesInput | AuthScalarWhereWithAggregatesInput[]
    OR?: AuthScalarWhereWithAggregatesInput[]
    NOT?: AuthScalarWhereWithAggregatesInput | AuthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Auth"> | string
    salt?: StringWithAggregatesFilter<"Auth"> | string
    current_hash?: StringWithAggregatesFilter<"Auth"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Auth">
    createdAt?: DateTimeWithAggregatesFilter<"Auth"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Auth"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    city?: StringNullableFilter<"Customer"> | string | null
    number?: StringNullableFilter<"Customer"> | string | null
    email?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    claims?: ClaimListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    claims?: ClaimOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    city?: StringNullableFilter<"Customer"> | string | null
    number?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    claims?: ClaimListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    city?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    number?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    name?: StringFilter<"Employee"> | string
    position?: StringNullableFilter<"Employee"> | string | null
    data?: JsonNullableFilter<"Employee">
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    claims?: ClaimListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    claims?: ClaimOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    position?: StringNullableFilter<"Employee"> | string | null
    data?: JsonNullableFilter<"Employee">
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    claims?: ClaimListRelationFilter
  }, "id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    name?: StringWithAggregatesFilter<"Employee"> | string
    position?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    data?: JsonNullableWithAggregatesFilter<"Employee">
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
  }

  export type ClaimWhereInput = {
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    id?: IntFilter<"Claim"> | number
    details?: StringNullableFilter<"Claim"> | string | null
    customer_id?: IntFilter<"Claim"> | number
    employee_id?: IntFilter<"Claim"> | number
    docs?: JsonNullableFilter<"Claim">
    policy_id?: IntFilter<"Claim"> | number
    metadata?: JsonNullableFilter<"Claim">
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    policyType?: XOR<PolicyTypeScalarRelationFilter, PolicyTypeWhereInput>
  }

  export type ClaimOrderByWithRelationInput = {
    id?: SortOrder
    details?: SortOrderInput | SortOrder
    customer_id?: SortOrder
    employee_id?: SortOrder
    docs?: SortOrderInput | SortOrder
    policy_id?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
    policyType?: PolicyTypeOrderByWithRelationInput
  }

  export type ClaimWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClaimWhereInput | ClaimWhereInput[]
    OR?: ClaimWhereInput[]
    NOT?: ClaimWhereInput | ClaimWhereInput[]
    details?: StringNullableFilter<"Claim"> | string | null
    customer_id?: IntFilter<"Claim"> | number
    employee_id?: IntFilter<"Claim"> | number
    docs?: JsonNullableFilter<"Claim">
    policy_id?: IntFilter<"Claim"> | number
    metadata?: JsonNullableFilter<"Claim">
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    policyType?: XOR<PolicyTypeScalarRelationFilter, PolicyTypeWhereInput>
  }, "id">

  export type ClaimOrderByWithAggregationInput = {
    id?: SortOrder
    details?: SortOrderInput | SortOrder
    customer_id?: SortOrder
    employee_id?: SortOrder
    docs?: SortOrderInput | SortOrder
    policy_id?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClaimCountOrderByAggregateInput
    _avg?: ClaimAvgOrderByAggregateInput
    _max?: ClaimMaxOrderByAggregateInput
    _min?: ClaimMinOrderByAggregateInput
    _sum?: ClaimSumOrderByAggregateInput
  }

  export type ClaimScalarWhereWithAggregatesInput = {
    AND?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    OR?: ClaimScalarWhereWithAggregatesInput[]
    NOT?: ClaimScalarWhereWithAggregatesInput | ClaimScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Claim"> | number
    details?: StringNullableWithAggregatesFilter<"Claim"> | string | null
    customer_id?: IntWithAggregatesFilter<"Claim"> | number
    employee_id?: IntWithAggregatesFilter<"Claim"> | number
    docs?: JsonNullableWithAggregatesFilter<"Claim">
    policy_id?: IntWithAggregatesFilter<"Claim"> | number
    metadata?: JsonNullableWithAggregatesFilter<"Claim">
    createdAt?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Claim"> | Date | string
  }

  export type PolicyTypeWhereInput = {
    AND?: PolicyTypeWhereInput | PolicyTypeWhereInput[]
    OR?: PolicyTypeWhereInput[]
    NOT?: PolicyTypeWhereInput | PolicyTypeWhereInput[]
    id?: IntFilter<"PolicyType"> | number
    data?: JsonNullableFilter<"PolicyType">
    metadata?: JsonNullableFilter<"PolicyType">
    createdAt?: DateTimeFilter<"PolicyType"> | Date | string
    updatedAt?: DateTimeFilter<"PolicyType"> | Date | string
    claims?: ClaimListRelationFilter
  }

  export type PolicyTypeOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    claims?: ClaimOrderByRelationAggregateInput
  }

  export type PolicyTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PolicyTypeWhereInput | PolicyTypeWhereInput[]
    OR?: PolicyTypeWhereInput[]
    NOT?: PolicyTypeWhereInput | PolicyTypeWhereInput[]
    data?: JsonNullableFilter<"PolicyType">
    metadata?: JsonNullableFilter<"PolicyType">
    createdAt?: DateTimeFilter<"PolicyType"> | Date | string
    updatedAt?: DateTimeFilter<"PolicyType"> | Date | string
    claims?: ClaimListRelationFilter
  }, "id">

  export type PolicyTypeOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PolicyTypeCountOrderByAggregateInput
    _avg?: PolicyTypeAvgOrderByAggregateInput
    _max?: PolicyTypeMaxOrderByAggregateInput
    _min?: PolicyTypeMinOrderByAggregateInput
    _sum?: PolicyTypeSumOrderByAggregateInput
  }

  export type PolicyTypeScalarWhereWithAggregatesInput = {
    AND?: PolicyTypeScalarWhereWithAggregatesInput | PolicyTypeScalarWhereWithAggregatesInput[]
    OR?: PolicyTypeScalarWhereWithAggregatesInput[]
    NOT?: PolicyTypeScalarWhereWithAggregatesInput | PolicyTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PolicyType"> | number
    data?: JsonNullableWithAggregatesFilter<"PolicyType">
    metadata?: JsonNullableWithAggregatesFilter<"PolicyType">
    createdAt?: DateTimeWithAggregatesFilter<"PolicyType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PolicyType"> | Date | string
  }

  export type UserProfileCreateInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    auth?: AuthCreateNestedOneWithoutUserProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: number
    data?: NullableJsonNullValueInput | InputJsonValue
    auth_id: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auth?: AuthUpdateOneWithoutUserProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: NullableJsonNullValueInput | InputJsonValue
    auth_id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: number
    data?: NullableJsonNullValueInput | InputJsonValue
    auth_id: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: NullableJsonNullValueInput | InputJsonValue
    auth_id?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthCreateInput = {
    id?: string
    salt: string
    current_hash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileCreateNestedOneWithoutAuthInput
  }

  export type AuthUncheckedCreateInput = {
    id?: string
    salt: string
    current_hash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userProfile?: UserProfileUncheckedCreateNestedOneWithoutAuthInput
  }

  export type AuthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    current_hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUpdateOneWithoutAuthNestedInput
  }

  export type AuthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    current_hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProfile?: UserProfileUncheckedUpdateOneWithoutAuthNestedInput
  }

  export type AuthCreateManyInput = {
    id?: string
    salt: string
    current_hash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    current_hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    current_hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    name: string
    city?: string | null
    number?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    city?: string | null
    number?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    city?: string | null
    number?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeCreateInput = {
    name: string
    position?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    name: string
    position?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    name: string
    position?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateInput = {
    details?: string | null
    docs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutClaimsInput
    employee: EmployeeCreateNestedOneWithoutClaimsInput
    policyType: PolicyTypeCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateInput = {
    id?: number
    details?: string | null
    customer_id: number
    employee_id: number
    docs?: NullableJsonNullValueInput | InputJsonValue
    policy_id: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimUpdateInput = {
    details?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutClaimsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutClaimsNestedInput
    policyType?: PolicyTypeUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    docs?: NullableJsonNullValueInput | InputJsonValue
    policy_id?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateManyInput = {
    id?: number
    details?: string | null
    customer_id: number
    employee_id: number
    docs?: NullableJsonNullValueInput | InputJsonValue
    policy_id: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimUpdateManyMutationInput = {
    details?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    docs?: NullableJsonNullValueInput | InputJsonValue
    policy_id?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyTypeCreateInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimCreateNestedManyWithoutPolicyTypeInput
  }

  export type PolicyTypeUncheckedCreateInput = {
    id?: number
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    claims?: ClaimUncheckedCreateNestedManyWithoutPolicyTypeInput
  }

  export type PolicyTypeUpdateInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUpdateManyWithoutPolicyTypeNestedInput
  }

  export type PolicyTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claims?: ClaimUncheckedUpdateManyWithoutPolicyTypeNestedInput
  }

  export type PolicyTypeCreateManyInput = {
    id?: number
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyTypeUpdateManyMutationInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AuthNullableScalarRelationFilter = {
    is?: AuthWhereInput | null
    isNot?: AuthWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    auth_id?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    auth_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    auth_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type AuthCountOrderByAggregateInput = {
    id?: SortOrder
    salt?: SortOrder
    current_hash?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthMaxOrderByAggregateInput = {
    id?: SortOrder
    salt?: SortOrder
    current_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthMinOrderByAggregateInput = {
    id?: SortOrder
    salt?: SortOrder
    current_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ClaimListRelationFilter = {
    every?: ClaimWhereInput
    some?: ClaimWhereInput
    none?: ClaimWhereInput
  }

  export type ClaimOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    number?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    number?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    city?: SortOrder
    number?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type PolicyTypeScalarRelationFilter = {
    is?: PolicyTypeWhereInput
    isNot?: PolicyTypeWhereInput
  }

  export type ClaimCountOrderByAggregateInput = {
    id?: SortOrder
    details?: SortOrder
    customer_id?: SortOrder
    employee_id?: SortOrder
    docs?: SortOrder
    policy_id?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimAvgOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    employee_id?: SortOrder
    policy_id?: SortOrder
  }

  export type ClaimMaxOrderByAggregateInput = {
    id?: SortOrder
    details?: SortOrder
    customer_id?: SortOrder
    employee_id?: SortOrder
    policy_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimMinOrderByAggregateInput = {
    id?: SortOrder
    details?: SortOrder
    customer_id?: SortOrder
    employee_id?: SortOrder
    policy_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimSumOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    employee_id?: SortOrder
    policy_id?: SortOrder
  }

  export type PolicyTypeCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PolicyTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyTypeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PolicyTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthCreateNestedOneWithoutUserProfileInput = {
    create?: XOR<AuthCreateWithoutUserProfileInput, AuthUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: AuthCreateOrConnectWithoutUserProfileInput
    connect?: AuthWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuthUpdateOneWithoutUserProfileNestedInput = {
    create?: XOR<AuthCreateWithoutUserProfileInput, AuthUncheckedCreateWithoutUserProfileInput>
    connectOrCreate?: AuthCreateOrConnectWithoutUserProfileInput
    upsert?: AuthUpsertWithoutUserProfileInput
    disconnect?: AuthWhereInput | boolean
    delete?: AuthWhereInput | boolean
    connect?: AuthWhereUniqueInput
    update?: XOR<XOR<AuthUpdateToOneWithWhereWithoutUserProfileInput, AuthUpdateWithoutUserProfileInput>, AuthUncheckedUpdateWithoutUserProfileInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserProfileCreateNestedOneWithoutAuthInput = {
    create?: XOR<UserProfileCreateWithoutAuthInput, UserProfileUncheckedCreateWithoutAuthInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutAuthInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserProfileUncheckedCreateNestedOneWithoutAuthInput = {
    create?: XOR<UserProfileCreateWithoutAuthInput, UserProfileUncheckedCreateWithoutAuthInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutAuthInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserProfileUpdateOneWithoutAuthNestedInput = {
    create?: XOR<UserProfileCreateWithoutAuthInput, UserProfileUncheckedCreateWithoutAuthInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutAuthInput
    upsert?: UserProfileUpsertWithoutAuthInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutAuthInput, UserProfileUpdateWithoutAuthInput>, UserProfileUncheckedUpdateWithoutAuthInput>
  }

  export type UserProfileUncheckedUpdateOneWithoutAuthNestedInput = {
    create?: XOR<UserProfileCreateWithoutAuthInput, UserProfileUncheckedCreateWithoutAuthInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutAuthInput
    upsert?: UserProfileUpsertWithoutAuthInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutAuthInput, UserProfileUpdateWithoutAuthInput>, UserProfileUncheckedUpdateWithoutAuthInput>
  }

  export type ClaimCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ClaimCreateWithoutCustomerInput, ClaimUncheckedCreateWithoutCustomerInput> | ClaimCreateWithoutCustomerInput[] | ClaimUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutCustomerInput | ClaimCreateOrConnectWithoutCustomerInput[]
    createMany?: ClaimCreateManyCustomerInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ClaimCreateWithoutCustomerInput, ClaimUncheckedCreateWithoutCustomerInput> | ClaimCreateWithoutCustomerInput[] | ClaimUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutCustomerInput | ClaimCreateOrConnectWithoutCustomerInput[]
    createMany?: ClaimCreateManyCustomerInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ClaimUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ClaimCreateWithoutCustomerInput, ClaimUncheckedCreateWithoutCustomerInput> | ClaimCreateWithoutCustomerInput[] | ClaimUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutCustomerInput | ClaimCreateOrConnectWithoutCustomerInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutCustomerInput | ClaimUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ClaimCreateManyCustomerInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutCustomerInput | ClaimUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutCustomerInput | ClaimUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ClaimCreateWithoutCustomerInput, ClaimUncheckedCreateWithoutCustomerInput> | ClaimCreateWithoutCustomerInput[] | ClaimUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutCustomerInput | ClaimCreateOrConnectWithoutCustomerInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutCustomerInput | ClaimUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ClaimCreateManyCustomerInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutCustomerInput | ClaimUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutCustomerInput | ClaimUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type ClaimCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ClaimCreateWithoutEmployeeInput, ClaimUncheckedCreateWithoutEmployeeInput> | ClaimCreateWithoutEmployeeInput[] | ClaimUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutEmployeeInput | ClaimCreateOrConnectWithoutEmployeeInput[]
    createMany?: ClaimCreateManyEmployeeInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ClaimCreateWithoutEmployeeInput, ClaimUncheckedCreateWithoutEmployeeInput> | ClaimCreateWithoutEmployeeInput[] | ClaimUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutEmployeeInput | ClaimCreateOrConnectWithoutEmployeeInput[]
    createMany?: ClaimCreateManyEmployeeInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type ClaimUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ClaimCreateWithoutEmployeeInput, ClaimUncheckedCreateWithoutEmployeeInput> | ClaimCreateWithoutEmployeeInput[] | ClaimUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutEmployeeInput | ClaimCreateOrConnectWithoutEmployeeInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutEmployeeInput | ClaimUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ClaimCreateManyEmployeeInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutEmployeeInput | ClaimUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutEmployeeInput | ClaimUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ClaimCreateWithoutEmployeeInput, ClaimUncheckedCreateWithoutEmployeeInput> | ClaimCreateWithoutEmployeeInput[] | ClaimUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutEmployeeInput | ClaimCreateOrConnectWithoutEmployeeInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutEmployeeInput | ClaimUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ClaimCreateManyEmployeeInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutEmployeeInput | ClaimUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutEmployeeInput | ClaimUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutClaimsInput = {
    create?: XOR<CustomerCreateWithoutClaimsInput, CustomerUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutClaimsInput
    connect?: CustomerWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutClaimsInput = {
    create?: XOR<EmployeeCreateWithoutClaimsInput, EmployeeUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutClaimsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type PolicyTypeCreateNestedOneWithoutClaimsInput = {
    create?: XOR<PolicyTypeCreateWithoutClaimsInput, PolicyTypeUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: PolicyTypeCreateOrConnectWithoutClaimsInput
    connect?: PolicyTypeWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<CustomerCreateWithoutClaimsInput, CustomerUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutClaimsInput
    upsert?: CustomerUpsertWithoutClaimsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutClaimsInput, CustomerUpdateWithoutClaimsInput>, CustomerUncheckedUpdateWithoutClaimsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<EmployeeCreateWithoutClaimsInput, EmployeeUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutClaimsInput
    upsert?: EmployeeUpsertWithoutClaimsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutClaimsInput, EmployeeUpdateWithoutClaimsInput>, EmployeeUncheckedUpdateWithoutClaimsInput>
  }

  export type PolicyTypeUpdateOneRequiredWithoutClaimsNestedInput = {
    create?: XOR<PolicyTypeCreateWithoutClaimsInput, PolicyTypeUncheckedCreateWithoutClaimsInput>
    connectOrCreate?: PolicyTypeCreateOrConnectWithoutClaimsInput
    upsert?: PolicyTypeUpsertWithoutClaimsInput
    connect?: PolicyTypeWhereUniqueInput
    update?: XOR<XOR<PolicyTypeUpdateToOneWithWhereWithoutClaimsInput, PolicyTypeUpdateWithoutClaimsInput>, PolicyTypeUncheckedUpdateWithoutClaimsInput>
  }

  export type ClaimCreateNestedManyWithoutPolicyTypeInput = {
    create?: XOR<ClaimCreateWithoutPolicyTypeInput, ClaimUncheckedCreateWithoutPolicyTypeInput> | ClaimCreateWithoutPolicyTypeInput[] | ClaimUncheckedCreateWithoutPolicyTypeInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutPolicyTypeInput | ClaimCreateOrConnectWithoutPolicyTypeInput[]
    createMany?: ClaimCreateManyPolicyTypeInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type ClaimUncheckedCreateNestedManyWithoutPolicyTypeInput = {
    create?: XOR<ClaimCreateWithoutPolicyTypeInput, ClaimUncheckedCreateWithoutPolicyTypeInput> | ClaimCreateWithoutPolicyTypeInput[] | ClaimUncheckedCreateWithoutPolicyTypeInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutPolicyTypeInput | ClaimCreateOrConnectWithoutPolicyTypeInput[]
    createMany?: ClaimCreateManyPolicyTypeInputEnvelope
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
  }

  export type ClaimUpdateManyWithoutPolicyTypeNestedInput = {
    create?: XOR<ClaimCreateWithoutPolicyTypeInput, ClaimUncheckedCreateWithoutPolicyTypeInput> | ClaimCreateWithoutPolicyTypeInput[] | ClaimUncheckedCreateWithoutPolicyTypeInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutPolicyTypeInput | ClaimCreateOrConnectWithoutPolicyTypeInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutPolicyTypeInput | ClaimUpsertWithWhereUniqueWithoutPolicyTypeInput[]
    createMany?: ClaimCreateManyPolicyTypeInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutPolicyTypeInput | ClaimUpdateWithWhereUniqueWithoutPolicyTypeInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutPolicyTypeInput | ClaimUpdateManyWithWhereWithoutPolicyTypeInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
  }

  export type ClaimUncheckedUpdateManyWithoutPolicyTypeNestedInput = {
    create?: XOR<ClaimCreateWithoutPolicyTypeInput, ClaimUncheckedCreateWithoutPolicyTypeInput> | ClaimCreateWithoutPolicyTypeInput[] | ClaimUncheckedCreateWithoutPolicyTypeInput[]
    connectOrCreate?: ClaimCreateOrConnectWithoutPolicyTypeInput | ClaimCreateOrConnectWithoutPolicyTypeInput[]
    upsert?: ClaimUpsertWithWhereUniqueWithoutPolicyTypeInput | ClaimUpsertWithWhereUniqueWithoutPolicyTypeInput[]
    createMany?: ClaimCreateManyPolicyTypeInputEnvelope
    set?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    disconnect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    delete?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    connect?: ClaimWhereUniqueInput | ClaimWhereUniqueInput[]
    update?: ClaimUpdateWithWhereUniqueWithoutPolicyTypeInput | ClaimUpdateWithWhereUniqueWithoutPolicyTypeInput[]
    updateMany?: ClaimUpdateManyWithWhereWithoutPolicyTypeInput | ClaimUpdateManyWithWhereWithoutPolicyTypeInput[]
    deleteMany?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
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

  export type AuthCreateWithoutUserProfileInput = {
    id?: string
    salt: string
    current_hash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthUncheckedCreateWithoutUserProfileInput = {
    id?: string
    salt: string
    current_hash: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthCreateOrConnectWithoutUserProfileInput = {
    where: AuthWhereUniqueInput
    create: XOR<AuthCreateWithoutUserProfileInput, AuthUncheckedCreateWithoutUserProfileInput>
  }

  export type AuthUpsertWithoutUserProfileInput = {
    update: XOR<AuthUpdateWithoutUserProfileInput, AuthUncheckedUpdateWithoutUserProfileInput>
    create: XOR<AuthCreateWithoutUserProfileInput, AuthUncheckedCreateWithoutUserProfileInput>
    where?: AuthWhereInput
  }

  export type AuthUpdateToOneWithWhereWithoutUserProfileInput = {
    where?: AuthWhereInput
    data: XOR<AuthUpdateWithoutUserProfileInput, AuthUncheckedUpdateWithoutUserProfileInput>
  }

  export type AuthUpdateWithoutUserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    current_hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthUncheckedUpdateWithoutUserProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    current_hash?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateWithoutAuthInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutAuthInput = {
    id?: number
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutAuthInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutAuthInput, UserProfileUncheckedCreateWithoutAuthInput>
  }

  export type UserProfileUpsertWithoutAuthInput = {
    update: XOR<UserProfileUpdateWithoutAuthInput, UserProfileUncheckedUpdateWithoutAuthInput>
    create: XOR<UserProfileCreateWithoutAuthInput, UserProfileUncheckedCreateWithoutAuthInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutAuthInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutAuthInput, UserProfileUncheckedUpdateWithoutAuthInput>
  }

  export type UserProfileUpdateWithoutAuthInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutAuthInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateWithoutCustomerInput = {
    details?: string | null
    docs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    employee: EmployeeCreateNestedOneWithoutClaimsInput
    policyType: PolicyTypeCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateWithoutCustomerInput = {
    id?: number
    details?: string | null
    employee_id: number
    docs?: NullableJsonNullValueInput | InputJsonValue
    policy_id: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimCreateOrConnectWithoutCustomerInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutCustomerInput, ClaimUncheckedCreateWithoutCustomerInput>
  }

  export type ClaimCreateManyCustomerInputEnvelope = {
    data: ClaimCreateManyCustomerInput | ClaimCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ClaimUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutCustomerInput, ClaimUncheckedUpdateWithoutCustomerInput>
    create: XOR<ClaimCreateWithoutCustomerInput, ClaimUncheckedCreateWithoutCustomerInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutCustomerInput, ClaimUncheckedUpdateWithoutCustomerInput>
  }

  export type ClaimUpdateManyWithWhereWithoutCustomerInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ClaimScalarWhereInput = {
    AND?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    OR?: ClaimScalarWhereInput[]
    NOT?: ClaimScalarWhereInput | ClaimScalarWhereInput[]
    id?: IntFilter<"Claim"> | number
    details?: StringNullableFilter<"Claim"> | string | null
    customer_id?: IntFilter<"Claim"> | number
    employee_id?: IntFilter<"Claim"> | number
    docs?: JsonNullableFilter<"Claim">
    policy_id?: IntFilter<"Claim"> | number
    metadata?: JsonNullableFilter<"Claim">
    createdAt?: DateTimeFilter<"Claim"> | Date | string
    updatedAt?: DateTimeFilter<"Claim"> | Date | string
  }

  export type ClaimCreateWithoutEmployeeInput = {
    details?: string | null
    docs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutClaimsInput
    policyType: PolicyTypeCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateWithoutEmployeeInput = {
    id?: number
    details?: string | null
    customer_id: number
    docs?: NullableJsonNullValueInput | InputJsonValue
    policy_id: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimCreateOrConnectWithoutEmployeeInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutEmployeeInput, ClaimUncheckedCreateWithoutEmployeeInput>
  }

  export type ClaimCreateManyEmployeeInputEnvelope = {
    data: ClaimCreateManyEmployeeInput | ClaimCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type ClaimUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutEmployeeInput, ClaimUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ClaimCreateWithoutEmployeeInput, ClaimUncheckedCreateWithoutEmployeeInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutEmployeeInput, ClaimUncheckedUpdateWithoutEmployeeInput>
  }

  export type ClaimUpdateManyWithWhereWithoutEmployeeInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type CustomerCreateWithoutClaimsInput = {
    name: string
    city?: string | null
    number?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutClaimsInput = {
    id?: number
    name: string
    city?: string | null
    number?: string | null
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutClaimsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutClaimsInput, CustomerUncheckedCreateWithoutClaimsInput>
  }

  export type EmployeeCreateWithoutClaimsInput = {
    name: string
    position?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeUncheckedCreateWithoutClaimsInput = {
    id?: number
    name: string
    position?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmployeeCreateOrConnectWithoutClaimsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutClaimsInput, EmployeeUncheckedCreateWithoutClaimsInput>
  }

  export type PolicyTypeCreateWithoutClaimsInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyTypeUncheckedCreateWithoutClaimsInput = {
    id?: number
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PolicyTypeCreateOrConnectWithoutClaimsInput = {
    where: PolicyTypeWhereUniqueInput
    create: XOR<PolicyTypeCreateWithoutClaimsInput, PolicyTypeUncheckedCreateWithoutClaimsInput>
  }

  export type CustomerUpsertWithoutClaimsInput = {
    update: XOR<CustomerUpdateWithoutClaimsInput, CustomerUncheckedUpdateWithoutClaimsInput>
    create: XOR<CustomerCreateWithoutClaimsInput, CustomerUncheckedCreateWithoutClaimsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutClaimsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutClaimsInput, CustomerUncheckedUpdateWithoutClaimsInput>
  }

  export type CustomerUpdateWithoutClaimsInput = {
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutClaimsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUpsertWithoutClaimsInput = {
    update: XOR<EmployeeUpdateWithoutClaimsInput, EmployeeUncheckedUpdateWithoutClaimsInput>
    create: XOR<EmployeeCreateWithoutClaimsInput, EmployeeUncheckedCreateWithoutClaimsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutClaimsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutClaimsInput, EmployeeUncheckedUpdateWithoutClaimsInput>
  }

  export type EmployeeUpdateWithoutClaimsInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeeUncheckedUpdateWithoutClaimsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyTypeUpsertWithoutClaimsInput = {
    update: XOR<PolicyTypeUpdateWithoutClaimsInput, PolicyTypeUncheckedUpdateWithoutClaimsInput>
    create: XOR<PolicyTypeCreateWithoutClaimsInput, PolicyTypeUncheckedCreateWithoutClaimsInput>
    where?: PolicyTypeWhereInput
  }

  export type PolicyTypeUpdateToOneWithWhereWithoutClaimsInput = {
    where?: PolicyTypeWhereInput
    data: XOR<PolicyTypeUpdateWithoutClaimsInput, PolicyTypeUncheckedUpdateWithoutClaimsInput>
  }

  export type PolicyTypeUpdateWithoutClaimsInput = {
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PolicyTypeUncheckedUpdateWithoutClaimsInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateWithoutPolicyTypeInput = {
    details?: string | null
    docs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutClaimsInput
    employee: EmployeeCreateNestedOneWithoutClaimsInput
  }

  export type ClaimUncheckedCreateWithoutPolicyTypeInput = {
    id?: number
    details?: string | null
    customer_id: number
    employee_id: number
    docs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimCreateOrConnectWithoutPolicyTypeInput = {
    where: ClaimWhereUniqueInput
    create: XOR<ClaimCreateWithoutPolicyTypeInput, ClaimUncheckedCreateWithoutPolicyTypeInput>
  }

  export type ClaimCreateManyPolicyTypeInputEnvelope = {
    data: ClaimCreateManyPolicyTypeInput | ClaimCreateManyPolicyTypeInput[]
    skipDuplicates?: boolean
  }

  export type ClaimUpsertWithWhereUniqueWithoutPolicyTypeInput = {
    where: ClaimWhereUniqueInput
    update: XOR<ClaimUpdateWithoutPolicyTypeInput, ClaimUncheckedUpdateWithoutPolicyTypeInput>
    create: XOR<ClaimCreateWithoutPolicyTypeInput, ClaimUncheckedCreateWithoutPolicyTypeInput>
  }

  export type ClaimUpdateWithWhereUniqueWithoutPolicyTypeInput = {
    where: ClaimWhereUniqueInput
    data: XOR<ClaimUpdateWithoutPolicyTypeInput, ClaimUncheckedUpdateWithoutPolicyTypeInput>
  }

  export type ClaimUpdateManyWithWhereWithoutPolicyTypeInput = {
    where: ClaimScalarWhereInput
    data: XOR<ClaimUpdateManyMutationInput, ClaimUncheckedUpdateManyWithoutPolicyTypeInput>
  }

  export type ClaimCreateManyCustomerInput = {
    id?: number
    details?: string | null
    employee_id: number
    docs?: NullableJsonNullValueInput | InputJsonValue
    policy_id: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimUpdateWithoutCustomerInput = {
    details?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutClaimsNestedInput
    policyType?: PolicyTypeUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    employee_id?: IntFieldUpdateOperationsInput | number
    docs?: NullableJsonNullValueInput | InputJsonValue
    policy_id?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    employee_id?: IntFieldUpdateOperationsInput | number
    docs?: NullableJsonNullValueInput | InputJsonValue
    policy_id?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateManyEmployeeInput = {
    id?: number
    details?: string | null
    customer_id: number
    docs?: NullableJsonNullValueInput | InputJsonValue
    policy_id: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimUpdateWithoutEmployeeInput = {
    details?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutClaimsNestedInput
    policyType?: PolicyTypeUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    docs?: NullableJsonNullValueInput | InputJsonValue
    policy_id?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    docs?: NullableJsonNullValueInput | InputJsonValue
    policy_id?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimCreateManyPolicyTypeInput = {
    id?: number
    details?: string | null
    customer_id: number
    employee_id: number
    docs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimUpdateWithoutPolicyTypeInput = {
    details?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutClaimsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutClaimsNestedInput
  }

  export type ClaimUncheckedUpdateWithoutPolicyTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    docs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimUncheckedUpdateManyWithoutPolicyTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    customer_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    docs?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
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