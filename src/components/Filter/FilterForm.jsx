import React from 'react';
import MainButton from '../Buttons/MainButton';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '../../redux/filters/filtersSelectors';
import { setFilters } from '../../redux/filters/filtersSlice';

function FilterForm({ carData }) {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const validationSchema = Yup.object().shape({
    carBrand: Yup.string(),
    price: Yup.string(),
    from: Yup.number(),
    to: Yup.number(),
  });

  const formik = useFormik({
    initialValues: filters,
    validationSchema,
    onSubmit: values => {
      console.log(values);
      dispatch(setFilters(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="carBrand">Car brand:</label>
        <select
          id="carBrand"
          name="carBrand"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.carBrand}
        >
          <option value="">Select a brand</option>
          {carData.map(car => (
            <option key={car.id} value={car.make}>
              {car.make}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="price">Price/1 hour:</label>
        <select
          id="price"
          name="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        >
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
          <option value="100+">100+</option>
        </select>
      </div>
      <div>
        <label htmlFor="mileage">Car mileage / km:</label>
        <div>
          <input
            type="text"
            id="from"
            name="from"
            placeholder="From"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.from}
          />
        </div>
        <div>
          <input
            type="text"
            id="to"
            name="to"
            placeholder="To"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.to}
          />
        </div>
      </div>
      <MainButton width={136} text="Search" type="submit" />
    </form>
  );
}

export default FilterForm;
