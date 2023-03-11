import { useEffect, useState, useContext } from 'react';
import { IControlSupply } from '../../utils/interfaces/index.context';
import { LastTwelveMonths } from '../../utils/types/index.props';
import { supplyContext } from '../../context/supply.context';
import { PatternSection } from '../../styled-components/pattern-section/index.section';
import { ChartBar } from '../../components/chart/index.chart-bar';
import { Form, Button } from 'react-bootstrap';
import { Api } from '../../utils/api/api';
import './index.style.home.css';

export function HomePage() {
  const { SetSuppleis, suppleis } = useContext(supplyContext);
  const [entrySuppleis, setEntrySuppleis] = useState<LastTwelveMonths[]>([]);
  const [exitSuppleis, setExitSuppleis] = useState<LastTwelveMonths[]>([]);

  const findSupplies = async () => {
    try {
      const suppleis = await Api.findALLSupplies();
      SetSuppleis(suppleis);
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

    const entry = countControl(findSupply?.entrySupply);
    setEntrySuppleis(entry);

    const exit = countControl(findSupply?.exitSupply);
    setExitSuppleis(exit);
  };

  const countControl = (data?: IControlSupply[]) => {
    const today = new Date();
    const lastTwelveMonths: LastTwelveMonths[] = [];
    for (let i = 0; i < 12; i++) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);

      const formattedDate = date.toISOString().substring(0, 7);
      lastTwelveMonths.push({
        month: formattedDate,
        amount: 0,
      });
    }

    lastTwelveMonths.reverse();

    for (let i = 0; i < lastTwelveMonths.length; i++) {
      const filterData = data?.filter(item => {
        return item.data.includes(lastTwelveMonths[i].month);
      });

      filterData?.map(item => {
        lastTwelveMonths[i].amount += item.quant;
      });
    }

    return lastTwelveMonths;
  };

  useEffect(() => {
    findSupplies();
  }, []);

  return (
    <>
      <PatternSection>
        <section className="section-charts">
          <section className="section-chart-polar"></section>

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
      </PatternSection>
    </>
  );
}
