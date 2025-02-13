import { BlocklyClient, type BlocklyProps } from "./blockly/workspace";
import { JsonArray, JsonField, JsonObject, Token } from "./json";

export function Blockly(props: BlocklyProps) {
  return (
    <>
      {props.testcases.map((_, i) => (
        <>
          {i !== 0 && <Token key={`open${i}`} value="{" />}
          <JsonField key={`id${i}`} field="id" value={i + 1} />
          <JsonField key={`type${i}`} field="type" value="text" />
          <JsonField key={`options${i}`} field="options">
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
          i !== props.testcases.length - 1 && <Token key={`close${i}`} value="}," />
        </>
      ))}
      <BlocklyClient {...props} />
    </>
  );
}
