export function isEmpty(value: any) {
  return (
    value === null || value === undefined || value === "" || value.length === 0
  );
}
