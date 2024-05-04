import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

function useDialog<T extends { id: string }>(items: T[]) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({ id: '' });
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const onOpenDialog = (item: T) => {
    setOpenDialog(true);
    const _searchParams = new URLSearchParams(searchParams);
    _searchParams.set('id', item.id);
    setSearchParams(_searchParams);
  };

  const onCloseDialog = () => {
    setOpenDialog(false);
    const _searchParams = new URLSearchParams(searchParams);
    _searchParams.delete('id');
    setSearchParams(_searchParams);
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, items]);

  return {
    item,
    openDialog,
    onOpenDialog,
    onCloseDialog,
  };
}

export default useDialog;
