import { BlocklyClient, type BlocklyProps } from "./blockly/workspace";
import { JsonArray, JsonField, JsonObject } from "./json";

export function Blockly(props: BlocklyProps) {
  return (
    <>
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
      <BlocklyClient {...props} />
    </>
  );
}
