import { useEffect, useState } from 'react';
import { BtnS } from '../../components-styled/btn/index.btn';
import * as C from '../../components-styled/table-styled/index.table';
import { api } from '../../utils/api/api';
import { ISupplies } from '../../utils/interfaces/useState.interface';
import { useNavigate } from 'react-router-dom';
import { SectionTableS } from '../../components-styled/section-table/index.section-table';
import { FormSectionTable } from '../form-section-table/index.form-table';
import { ReactModalC } from '../react-modal/index.reactModal';
import { FormCreateSupply } from '../forms/index.createSupply';

export function TablesStock() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>('');
  const [supplies, setSupplies] = useState<ISupplies[]>([]);

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const findAllSupplies = async () => {
    const findSupplies = await api.findAllSpply();
    setSupplies(findSupplies);
  };

  const filterInsumos =
    filter.length > 0
      ? supplies.filter(insumo => {
          return insumo.nome.toLowerCase().includes(filter.toLowerCase());
        })
      : supplies;

  useEffect(() => {
    findAllSupplies();
  }, []);

  return (
    <>
      <SectionTableS>
        <FormSectionTable openModal={openModal} setFilter={setFilter} />
        <ReactModalC
          children={<FormCreateSupply closeModal={closeModal} modalIsOpen />}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      </SectionTableS>
      <C.TableS>
        <C.TrS>
          <C.ThS widthP displayP>
            Cod
          </C.ThS>
          <C.ThS>Nome</C.ThS>
          <C.ThS>Qtde Esoque</C.ThS>
          <C.ThS>Unid</C.ThS>
          <C.ThS displayP>Ativo</C.ThS>
        </C.TrS>
        {filterInsumos.map((insumo, index) => {
          return (
            <C.TrS bg={index % 2 === 0 ? true : false} key={index}>
              <BtnS
                onClick={() => {
                  navigate(`/supply/${insumo.id}`);
                }}
              >
                <C.TdS widthP displayP>
                  {insumo.id}
                </C.TdS>
                <C.TdS>{insumo.nome}</C.TdS>
                <C.TdS>{insumo.quant_estoque}</C.TdS>
                <C.TdS>{insumo.unidade.toUpperCase()}</C.TdS>
                <C.TdS displayP>{insumo.ativo ? 'ATIVO' : 'OBSOLETO'}</C.TdS>
              </BtnS>
            </C.TrS>
          );
        })}
      </C.TableS>
    </>
  );
}
