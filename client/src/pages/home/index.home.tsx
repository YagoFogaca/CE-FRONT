import { useEffect, useState, useContext } from 'react';
import {
  LastTwelveMonths,
  QuantControl,
  UseStateQuantStock,
} from '../../utils/types/index.props';
import { supplyContext } from '../../context/supply.context';
import { PatternSection } from '../../styled-components/pattern-section/index.section';
import { ChartBar } from '../../components/chart/index.chart-bar';
import { ChartPolar } from '../../components/chart/index.chart.polar';
import { Loading } from '../../components/loading/index.loading';
import { Form, Button } from 'react-bootstrap';
import { filterControl } from '../../utils/count-control/index.filter-control';
import { countStock } from '../../utils/count-control/index.count-stock';
import { Api } from '../../utils/api/api';
import './index.style.home.css';
import { ISupplyContext } from '../../utils/interfaces/index.context';

export function HomePage() {
  const [loading, setLoading] = useState(true);
  const { SetSuppleis, suppleis } = useContext(supplyContext);
  const [entrySuppleis, setEntrySuppleis] = useState<LastTwelveMonths[]>([]);
  const [exitSuppleis, setExitSuppleis] = useState<LastTwelveMonths[]>([]);
  const [entryQuantSuppleis, setEntryQuantSuppleis] = useState<QuantControl[]>(
    [],
  );
  const [exitQuantSuppleis, setExitQuantSuppleis] = useState<QuantControl[]>(
    [],
  );
  const [quantStock, setQuantStock] = useState<UseStateQuantStock>({
    total: 0,
    active: 0,
    obsolete: 0,
  });

  const controlAnalysis = (suppleis: ISupplyContext[]) => {
    const controlEntrys = [];
    const controlExits = [];

    suppleis.sort((a, b) => {
      const aLength = a.entrySupply?.length ?? -Infinity;
      const bLength = b.entrySupply?.length ?? -Infinity;
      return bLength - aLength;
    });
    for (let i = 0; i <= 5; i++) {
      controlEntrys.push({
        name: suppleis[i].nome,
        quantControl: suppleis[i].entrySupply?.length,
      });
    }

    suppleis.sort((a, b) => {
      const aLength = a.exitSupply?.length ?? -Infinity;
      const bLength = b.exitSupply?.length ?? -Infinity;
      return bLength - aLength;
    });
    for (let i = 0; i <= 5; i++) {
      controlExits.push({
        name: suppleis[i].nome,
        quantControl: suppleis[i].exitSupply?.length,
      });
    }

    setEntryQuantSuppleis(controlEntrys);
    setExitQuantSuppleis(controlExits);
  };

  const findSupplies = async () => {
    try {
      const suppleis = await Api.findALLSupplies();
      SetSuppleis(suppleis);
      countStock({ suppleis, setQuantStock });
      controlAnalysis(suppleis);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nameSupply = e.currentTarget.nome.value;
    const findSupply = suppleis
      .filter(item => {
        return item.nome === nameSupply;
      })
      .find(item => {
        return item;
      });

    const entry = filterControl(findSupply?.entrySupply);
    setEntrySuppleis(entry);

    const exit = filterControl(findSupply?.exitSupply);
    setExitSuppleis(exit);
  };

  useEffect(() => {
    findSupplies();
  }, []);

  return (
    <>
      <PatternSection>
        {loading ? (
          <Loading />
        ) : (
          <section className="section-charts">
            <section className="section-infos-home">
              <div className="infos-stock">
                <div>
                  <span>Total no estoque: {quantStock.total}</span>
                </div>
                <div>
                  <span>Total Ativo: {quantStock.active}</span>
                </div>
                <div>
                  <span>Total Obsoleto: {quantStock.obsolete}</span>
                </div>
              </div>
              <div className="card-chart-polar">
                Maior frequencia de entradas:
                <ChartPolar data={entryQuantSuppleis} />
              </div>
              <div className="card-chart-polar">
                Maior frequencia de saidas:
                <ChartPolar data={exitQuantSuppleis} />
              </div>
            </section>

            <section className="section-chart">
              <div className="section-form-chart">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome insumo</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      {suppleis.map((supply, index) => {
                        return (
                          <option value={supply.nome} key={index}>
                            {supply.nome}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="nome">
                    <Button type="submit">Buscar</Button>
                  </Form.Group>
                </Form>
              </div>
              <div className="section-chart-colun">
                {entrySuppleis.length > 0 && exitSuppleis.length > 0 ? (
                  <>
                    <div>
                      <ChartBar
                        data={entrySuppleis}
                        seriesName={'Entrada'}
                        titleText={'Entradas'}
                      />
                    </div>
                    <div>
                      <ChartBar
                        data={exitSuppleis}
                        seriesName={'Saida'}
                        titleText={'Saidas'}
                      />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </section>
          </section>
        )}
      </PatternSection>
    </>
  );
}
