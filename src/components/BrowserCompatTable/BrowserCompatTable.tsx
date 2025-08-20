import styled from "styled-components";
import bcd from "@mdn/browser-compat-data";
import { semantic } from "../../theme/tokens";

const TableContainer = styled.div`
  margin: 1rem 0;
  border: 1px solid ${semantic.code.border};
  border-radius: 4px;
  overflow: hidden;
  font-size: 0.875rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${semantic.code.containerBackground};
`;

const TableHeader = styled.thead`
  background: ${semantic.componentCard.background};
  color: ${semantic.hero.foreground};
`;

const Th = styled.th`
  padding: 8px 12px;
  text-align: center;
  font-weight: 600;
  border-bottom: 1px solid ${semantic.code.border};
  font-size: 0.75rem;
  white-space: nowrap;
`;

const Td = styled.td`
  padding: 6px 8px;
  border-bottom: 1px solid ${semantic.code.border};
  vertical-align: middle;
  text-align: center;
  font-size: 0.75rem;
`;

const SupportStatus = styled.span<{ supported: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: bold;
  background: ${({ supported }) =>
    supported ? "rgb(34, 197, 94)" : "rgb(239, 68, 68)"};
  color: white;
`;

const VersionText = styled.span`
  font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", monospace;
  font-size: 0.75rem;
  color: ${semantic.code.text};
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  color: ${semantic.hero.foreground};
  font-size: 1rem;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 0 0 0.5rem 0;
  color: ${semantic.code.text};
  line-height: 1.4;
  font-size: 0.875rem;
`;

const FeatureName = styled.td`
  padding: 6px 8px;
  border-bottom: 1px solid ${semantic.code.border};
  vertical-align: middle;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${semantic.hero.foreground};
  white-space: nowrap;
`;

// Get browser compatibility data for popover features
const getPopoverCompatData = () => {
  const features = [
    {
      name: "popover",
      data: bcd.html.global_attributes.popover,
      description: "HTML popover attribute",
    },
    {
      name: "position-anchor",
      data: bcd.css.properties.position_anchor,
      description: "CSS position-anchor property",
    },
    {
      name: "anchor()",
      data: bcd.css.types.anchor,
      description: "CSS anchor() function",
    },
    {
      name: "anchor-name",
      data: bcd.css.properties.anchor_name,
      description: "CSS anchor-name property",
    },
  ];

  return features;
};

// Get browser support status
const getSupportStatus = (support: any, browser: string) => {
  if (!support || !support[browser]) {
    return { supported: false, version: "Not supported" };
  }

  const browserData = support[browser];

  if (browserData.version_added === true) {
    return { supported: true, version: "Supported" };
  }

  if (browserData.version_added === false) {
    return { supported: false, version: "Not supported" };
  }

  if (typeof browserData.version_added === "string") {
    return { supported: true, version: browserData.version_added };
  }

  return { supported: false, version: "Not supported" };
};

// Get major browsers to display
const getMajorBrowsers = () => {
  const browsers = bcd.browsers;
  return [
    { key: "chrome", name: "Chrome", data: browsers.chrome },
    { key: "edge", name: "Edge", data: browsers.edge },
    { key: "firefox", name: "Firefox", data: browsers.firefox },
    { key: "opera", name: "Opera", data: browsers.opera },
    { key: "safari", name: "Safari", data: browsers.safari },
    {
      key: "chrome_android",
      name: "Chrome Android",
      data: browsers.chrome_android,
    },
    {
      key: "firefox_android",
      name: "Firefox Android",
      data: browsers.firefox_android,
    },
    {
      key: "opera_android",
      name: "Opera Android",
      data: browsers.opera_android,
    },
    { key: "safari_ios", name: "Safari iOS", data: browsers.safari_ios },
    {
      key: "samsunginternet_android",
      name: "Samsung Internet",
      data: browsers.samsunginternet_android,
    },
    {
      key: "webview_android",
      name: "WebView Android",
      data: browsers.webview_android,
    },
  ];
};

export const BrowserCompatTable = () => {
  const features = getPopoverCompatData();
  const browsers = getMajorBrowsers();

  return (
    <div>
      <Title>Browser compatibility</Title>
      <Description>
        Browser support for popover features used in this component.
      </Description>

      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <Th style={{ textAlign: "left", width: "120px" }}>Feature</Th>
              {browsers.map((browser) => (
                <Th key={browser.key}>{browser.name}</Th>
              ))}
            </tr>
          </TableHeader>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index}>
                <FeatureName title={feature.description}>
                  {feature.name}
                </FeatureName>
                {browsers.map((browser) => {
                  const status = getSupportStatus(
                    feature.data?.__compat?.support,
                    browser.key
                  );
                  return (
                    <Td
                      key={browser.key}
                      title={`${browser.name}: ${status.version}`}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px",
                        }}
                      >
                        <SupportStatus supported={status.supported}>
                          {status.supported ? "✓" : "✗"}
                        </SupportStatus>
                        <VersionText>{status.version}</VersionText>
                      </div>
                    </Td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>

      <div
        style={{
          marginTop: "0.5rem",
          padding: "8px 12px",
          background: "rgba(59, 130, 246, 0.05)",
          border: "1px solid rgba(59, 130, 246, 0.1)",
          borderRadius: "4px",
          fontSize: "0.75rem",
          color: semantic.code.text,
        }}
      >
        <strong>Note:</strong> The Popover component uses progressive
        enhancement. Features not supported fall back to traditional positioning
        methods.
      </div>
    </div>
  );
};
