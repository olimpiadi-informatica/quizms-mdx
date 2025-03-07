import { BlocklyClient, type BlocklyProps } from "./blockly/workspace";
import { JsonArray, JsonField, JsonObject, Token } from "./json";

export function Blockly(props: BlocklyProps) {
  return (
    <>
      {props.testcases.map((_, i) => (
        <>
          {i != 0 && <Token value="},{" />}
          <JsonField field="id" value={i + 1} />
          <JsonField field="type" value="text" />
          <JsonField field="options">
            <JsonArray>
              <JsonObject>
                <JsonField field="value" value="✅" />
                <JsonField field="correct" value={true} />
              </JsonObject>
              <JsonObject>
                <JsonField field="value" value="❌" />
                <JsonField field="correct" value={false} />
              </JsonObject>
            </JsonArray>
          </JsonField>
        </>
      ))}
      <BlocklyClient {...props} />
    </>
  );
}
