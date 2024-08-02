export type Sorting = {
  columnName: string;
  direction: 'asc' | 'desc';
};

export const handleSortingChange = (
  newSorting: Sorting[],
  sorting: Sorting[],
  setSorting: (sorting: Sorting[]) => void
) => {
  if (newSorting.length === 0) {
    setSorting([]);
  } else {
    const columnName = newSorting[0].columnName;
    const direction = sorting.find(s => s.columnName === columnName)?.direction;
    if (direction === 'asc') {
      setSorting([{ columnName, direction: 'desc' }]);
    } else if (direction === 'desc') {
      setSorting([]);
    } else {
      setSorting(newSorting);
    }
  }
};
