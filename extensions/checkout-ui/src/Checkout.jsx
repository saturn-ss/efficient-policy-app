import {
  reactExtension,
  Banner,
  BlockStack,
  Checkbox,
  Text,
  useApi,
  useApplyAttributeChange,
  useInstructions,
  useTranslate,
  Divider,
} from "@shopify/ui-extensions-react/checkout";

// 1. Choose an extension target
export default reactExtension("purchase.checkout.cart-line-list.render-after", () => (
  <Extension />
));

function Extension() {
  // 3. Render a UI
  return (
    <BlockStack border={"none"} padding={"tight"}>
      <Divider />
    </BlockStack>
  );
}