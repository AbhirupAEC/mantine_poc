import { SimpleGrid } from "@mantine/core";

export function Products() {
  return (
    <SimpleGrid
      style={{ marginTop: 10 }}
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        "&:hover": {
          backgroundColor: theme.colors.gray[1],
        },
      })}
      cols={3}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: "md" },
        { maxWidth: 500, cols: 2, spacing: "sm" },
        { maxWidth: 300, cols: 1, spacing: "sm" },
      ]}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
