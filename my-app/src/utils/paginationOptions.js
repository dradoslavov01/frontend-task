export const generatePaginationOptions = (data, pageSize) => {
  const paginationOptions = [];
  const paginationCount = Math.ceil(data.length / pageSize);

  for (let i = 1; i <= paginationCount; i++) {
    paginationOptions.push({ value: i });
  }

  return paginationOptions;
}
