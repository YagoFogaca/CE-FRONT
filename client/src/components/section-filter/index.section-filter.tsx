import { PropsSectionFilter } from '../../utils/types/index.props';
import './index.section-filter.css';

export function SectionFilter({ setFilter }: PropsSectionFilter) {
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
      </section>
    </>
  );
}
