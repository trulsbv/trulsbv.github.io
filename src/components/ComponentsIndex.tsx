import styled from "styled-components";
import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { semantic } from "../theme/tokens";
import { getAvailableComponents } from "../pages/components/detail/componentDictionary";

const Section = styled.section`
  margin: 2rem 0;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${semantic.hero.foreground};
`;

const SearchInput = styled.input`
  flex: 1;
  max-width: 360px;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${semantic.componentCard.border};
  border-radius: 8px;
  background: #fff;
  font-size: 0.95rem;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${semantic.header.linkActiveBg};
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.5rem;
`;

const Chip = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  border-radius: 10px;
  border: 1px solid ${semantic.componentCard.border};
  background: ${semantic.componentCard.background};
  color: ${semantic.componentCard.title};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1;
  min-height: 40px;
  transition: background-color 0.15s ease, border-color 0.15s ease, transform 0.05s ease;

  &:hover {
    background: #fff;
    border-color: ${semantic.componentCard.hoverBorder};
  }

  &:active {
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid ${semantic.button.focusOutline};
    outline-offset: 2px;
  }

  &[aria-current="page"] {
    background: #fff;
    border-color: ${semantic.header.linkActiveBg};
    box-shadow: inset 0 0 0 1px ${semantic.header.linkActiveBg};
  }
`;

const toTitleCase = (str: string) => str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export const ComponentsIndex = () => {
  const [query, setQuery] = useState("");

  const components = useMemo(() => {
    const names = getAvailableComponents();
    const normalized = names
      .map((n) => ({ display: toTitleCase(n), route: n.toLowerCase() }))
      .sort((a, b) => a.display.localeCompare(b.display));

    if (!query.trim()) return normalized;

    const q = query.trim().toLowerCase();
    return normalized.filter(({ display, route }) =>
      display.toLowerCase().includes(q) || route.includes(q)
    );
  }, [query]);

  return (
    <Section>
      <HeaderRow>
        <Title>Components</Title>
        <SearchInput
          type="search"
          placeholder="Search components…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search components"
        />
      </HeaderRow>
      <Grid>
        {components.map(({ display, route }) => (
          <Chip key={route} to={`/components/${route}`} end>
            {display}
          </Chip>
        ))}
      </Grid>
    </Section>
  );
};

export default ComponentsIndex;
