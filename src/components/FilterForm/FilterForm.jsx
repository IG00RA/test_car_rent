import React from 'react';
import MainButton from '../Buttons/MainButton';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/filters/filtersSelectors';
import { setFilters } from '../../redux/filters/filtersSlice';
import {
  SelectWrap,
  StyledForm,
  StyledInputFrom,
  StyledInputTo,
  StyledLabel,
} from './FilterForm.styled';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function FilterForm({ carData }) {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const validationSchema = Yup.object().shape({
    carBrand: Yup.string(),
    from: Yup.string(),
    to: Yup.string(),
  });
  const formik = useFormik({
    initialValues: filters,
    validationSchema,
    onSubmit: values => {
      dispatch(setFilters(values));
    },
  });
  const handlePriceChange = option => {
    formik.setFieldValue('price', option.value);
  };
  const priceOptions = [
    '20',
    '30',
    '40',
    '50',
    '60',
    '70',
    '80',
    '90',
    '100',
    '110',
    '120',
    '130',
    '140',
    '150',
    '160',
    '170',
    '180',
    '190',
    '200',
    '210',
    '220',
    '230',
    '240',
    '250',
    '260',
    '270',
    '280',
    '290',
    '300',
  ];

  const defaultPriceOption = 'To $';
  const uniqueCarMakes = [...new Set(carData.map(car => car.make))];
  const handleReset = () => {
    formik.resetForm();
    formik.setFieldValue('price', 5000);
    formik.handleSubmit();
  };
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <SelectWrap>
        <StyledLabel htmlFor="carBrand">Car brand:</StyledLabel>
        <div className="dropdown-wrapper dropdown-wrapper-brand">
          <Dropdown
            options={uniqueCarMakes.map(carMake => ({
              value: carMake,
              label: carMake,
            }))}
            onChange={selectedOption =>
              formik.setFieldValue('carBrand', selectedOption.value)
            }
            value={formik.values.carBrand}
            placeholder="Enter the text"
          />
        </div>
      </SelectWrap>

      <SelectWrap>
        <StyledLabel htmlFor="price">Price/1 hour:</StyledLabel>
        <div className="dropdown-wrapper">
          <Dropdown
            options={priceOptions.map(option => ({
              value: option,
              label: option,
            }))}
            onChange={handlePriceChange}
            value={defaultPriceOption}
            placeholder="Select an option"
          />
        </div>
      </SelectWrap>

      <SelectWrap>
        <StyledLabel htmlFor="mileage">Car mileage / km:</StyledLabel>
        <div>
          <StyledInputFrom
            type="text"
            id="from"
            name="from"
            placeholder="From"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.from}
          />
          <StyledInputTo
            type="text"
            id="to"
            name="to"
            placeholder="To"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.to}
          />
        </div>
      </SelectWrap>

      <MainButton width={136} text="Search" type="submit" />
      <MainButton width={136} text="Reset" onClick={handleReset} />
    </StyledForm>
  );
}
export default FilterForm;
