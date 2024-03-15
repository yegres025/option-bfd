import FormWrapper from '../form-wrapper/form-wrapper';
import DropdownOption from '../dropdown-option/dropdown-option';
import {
  OPTIONS,
  defaultUnivercityKeys,
} from '../dropdown-option/consts/consts';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import {
  addCountry,
  addCity,
  addUnivercity,
  addAccommodation,
} from '../../store/data-slice/data-slice';

export default function DropdownForm() {
  const dispatch: AppDispatch = useDispatch();
  const { country, city, univercity, accommodation } = useSelector(
    (state: RootState) => state.data.selectData
  );

  return (
    <div className='dropdown-form-wrapper'>
      <FormWrapper
        onSubmit={(e) => {
          e.preventDefault();
          alert('active');
        }}
        disabled={!accommodation}
        direction='column'
      >
        <DropdownOption
          options={Object.keys(OPTIONS)}
          onChange={(e) => dispatch(addCountry(e.target.value))}
        />
        <DropdownOption
          options={country ? Object.keys(OPTIONS[country]) : []}
          onChange={(e) => dispatch(addCity(e.target.value))}
          disabled={!country}
        />
        <DropdownOption
          options={Object.keys(
            OPTIONS[defaultUnivercityKeys.country]?.[defaultUnivercityKeys.city]
          )}
          onChange={(e) => dispatch(addUnivercity(e.target.value))}
        />
        <DropdownOption
          options={ 
            city && univercity ? Object.values(OPTIONS[country][city][univercity]) : []
          }
          onChange={(e) => dispatch(addAccommodation(e.target.value))}
          disabled={!univercity}
        />
      </FormWrapper>
    </div>
  );
}
