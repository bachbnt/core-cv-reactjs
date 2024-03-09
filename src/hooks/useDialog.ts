import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

function useDialog<T extends { id: string }>(items: T[]) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({ id: '' });
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const onOpenDialog = useCallback(
    (item: T) => {
      setOpenDialog(true);
      const _searchParams = new URLSearchParams(searchParams);
      _searchParams.set('id', item.id);
      setSearchParams(_searchParams);
    },
    [searchParams, setSearchParams]
  );

  const onCloseDialog = useCallback(() => {
    setOpenDialog(false);
    const _searchParams = new URLSearchParams(searchParams);
    _searchParams.delete('id');
    setSearchParams(_searchParams);
  }, [searchParams, setSearchParams]);

  const item = useMemo(() => {
    const _searchParams = new URLSearchParams(location.search);
    const id = _searchParams.get('id');
    return items.find((item) => item.id === id);
  }, [location, items]);

  useEffect(() => {
    if (isEmpty(items)) {
      return;
    }
    if (!isNil(item)) {
      onOpenDialog(item);
    } else {
      onCloseDialog();
    }
  }, [item, items, onOpenDialog, onCloseDialog]);

  return {
    item,
    openDialog,
    onOpenDialog,
    onCloseDialog,
  };
}

export default useDialog;
