import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from '../../components-styled/table-styled/index.table';
import { SectionTable } from '../section-table/index.sectionTable';
import { BtnS } from '../../components-styled/btn/index.btn';
import { IEntrySupply } from '../../utils/interfaces/useState.interface';
import { api } from '../../utils/api/api';

export function TableEntry() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('');
  const [entrys, setEntrys] = useState<IEntrySupply[]>([]);

  const findAllEntry = async () => {
    const findEntrys = await api.findAllEntry();
    setEntrys(findEntrys);
  };

  const filterEntry =
    filter.length > 0
      ? entrys.filter(entry => {
          return entry.supply.nome.toLowerCase().includes(filter.toLowerCase());
        })
      : entrys;

  useEffect(() => {
    findAllEntry();
  }, []);

  return (
    <>
      <SectionTable setFilter={setFilter} />
      <C.TableS>
        <C.TrS>
          <C.ThS widthP displayP>
            Cod
          </C.ThS>
          <C.ThS>Nome</C.ThS>
          <C.ThS>Qtde</C.ThS>
          <C.ThS>Data</C.ThS>
        </C.TrS>
        {filterEntry.map((entry, index) => {
          return (
            <C.TrS bg={index % 2 === 0 ? true : false} key={index}>
              <BtnS
                onClick={() => {
                  // navigate(`/supply/${entry.id}`);
                }}
              >
                <C.TdS widthP displayP>
                  {entry.id}
                </C.TdS>
                <C.TdS>{entry.supply.nome}</C.TdS>
                <C.TdS>{entry.quant}</C.TdS>
                <C.TdS>{entry.data}</C.TdS>
              </BtnS>
            </C.TrS>
          );
        })}
      </C.TableS>
    </>
  );
}
