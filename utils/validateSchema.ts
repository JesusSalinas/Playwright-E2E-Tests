import Ajv, { JSONSchemaType } from "ajv";
import addFormats from "ajv-formats";

export function validateSchema<T>(schema: JSONSchemaType<T>, data: unknown): void {
  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);

  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (!valid) {
    const errors = JSON.stringify(validate.errors, null, 2);
    throw new Error(`❌ Schema validation failed:\n${errors}`);
  }
}
