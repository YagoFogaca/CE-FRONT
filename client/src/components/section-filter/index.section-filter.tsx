import { PropsSectionFilter } from '../../utils/types/index.props';
import { BtnCreate } from '../btn-create/index.btn-create';
import './index.section-filter.css';

export function SectionFilter({ setFilter, children }: PropsSectionFilter) {
  return (
    <>
      <section className="section-filter">
        <input
          type="text"
          name="text"
          id="text"
          className="input-filter"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFilter(e.currentTarget.value);
          }}
        />
        <BtnCreate children={children} />
      </section>
    </>
  );
}
