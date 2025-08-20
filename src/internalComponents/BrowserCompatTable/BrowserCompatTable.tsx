import styled from "styled-components";
import bcd from "@mdn/browser-compat-data";
import { semantic } from "../../theme/tokens";

const TableContainer = styled.div`
  border: 1px solid ${semantic.code.border};
  border-radius: 4px;
  overflow-x: scroll;
`;

const Table = styled.table`
  border-collapse: collapse;
  background: ${semantic.code.containerBackground};
`;

const TableHeader = styled.thead`
  background: ${semantic.componentCard.background};
`;

const Th = styled.th`
  padding: 8px 12px;
  border-bottom: 1px solid ${semantic.code.border};
  font-size: 0.75rem;
  min-width: 75px;
  max-width: 75px;
  text-align: center;
`;

const Td = styled.td`
  padding: 6px 8px;
  border-bottom: 1px solid ${semantic.code.border};
  font-size: 0.75rem;
  text-align: center;
`;

const SupportStatus = styled.span<{ $supported: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  padding: 15px;
  background: ${({ $supported }) =>
    $supported ? "rgb(25, 158, 74)" : "rgb(223, 44, 44)"};
`;

const Title = styled.h3`
  color: ${semantic.hero.foreground};
  font-size: 1rem;
`;

const Description = styled.p`
  color: ${semantic.code.text};
  font-size: 0.875rem;
  line-height: 1.4;
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

// const findBeforeToggleEvent = (
//   bcd: any,
//   path: string[],
//   target: string,
//   cumulatedPath: string[] = []
// ): string[] | false => {
//   if (!bcd) return false;
//   if (typeof bcd !== "object") return false;

//   for (const key in bcd) {
//     if (key.includes(target)) {
//       return [...cumulatedPath, key];
//     }

//     const result = findBeforeToggleEvent(bcd[key], [...path, key], target, [
//       ...cumulatedPath,
//       key,
//     ]);
//     if (result) {
//       return result;
//     }
//   }

//   return false;
// };

// const positionAnchorPath = findBeforeToggleEvent(
//   bcd,
//   ["bcd"],
//   "position-anchor"
// );
// const foundPath = positionAnchorPath
//   ? `bcd.${positionAnchorPath.join(".")}`
//   : null;

// if (foundPath) {
//   console.log(`FOUND AT: ${foundPath}`);
// }
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
      data: bcd.css.properties["position-anchor"],
      description: "CSS position-anchor property",
    },
    {
      name: "beforetoggle",
      data: bcd.api.HTMLElement.beforetoggle_event,
      description: "API beforetoggle event",
    },
    {
      name: "anchor()",
      data: bcd.css.types.anchor,
      description: "CSS anchor() function",
    },
    {
      name: "anchor-name",
      data: bcd.css.properties["anchor-name"],
      description: "CSS anchor-name property",
    },
  ];

  return features;
};

type SupportStatusReturn =
  | {
      supported: true;
      version: string;
    }
  | {
      supported: false;
    };

// Get browser support status
const getSupportStatus = (
  support: any,
  browser: string
): SupportStatusReturn => {
  if (!support || !support[browser]) {
    return { supported: false };
  }

  const browserData = support[browser];

  if (browserData.version_added === true) {
    return { supported: true, version: "?" };
  }

  if (browserData.version_added === false) {
    return { supported: false };
  }

  if (typeof browserData.version_added === "string") {
    return { supported: true, version: browserData.version_added };
  }

  return { supported: false };
};

// Get major browsers to display
const getMajorBrowsers = () => {
  const browsers = bcd.browsers;

  return Object.keys(browsers)
    .map((key) => {
      const browser = browsers[key as keyof typeof browsers];
      if (!browser) {
        return null;
      }

      return {
        key,
        name: browser.name,
      };
    })
    .filter((browser) => browser !== null);
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
                      title={`${browser.name}: ${
                        status.supported ? status.version : "N/A"
                      }`}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <SupportStatus $supported={status.supported}>
                          {status.supported ? status.version : "N/A"}
                        </SupportStatus>
                      </div>
                    </Td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
