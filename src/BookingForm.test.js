import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import BookingForm from './component/BookingForm';
import { mount } from 'enzyme';


const reservations = []
const availableTime = [ "17:00",
                        "18:00",
                        "19:00",
                        "20:00",
                        "21:00",
                        "22:00"
                      ];

const reservationData = [{
    firstName : "",
    lastName : "",
    reservationDate : "",
    reservationTime : "",
    numberOfGuests : "",
    occasion : "",
    email : "",
    phone : ""
  }];

test('Renders the BookingForm Make Your Reservation button', () => {
  render(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
  const reservationButon = screen.getByText(/Make Your reservation/i);
  expect(reservationButon).toBeInTheDocument();
});


test('initializeTimes function testing', () => {

  const {getByText} = render(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
  
  expect(getByText(/17:00/i)).toBeInTheDocument();
  expect(getByText(/20:00/i)).toBeInTheDocument();
  expect(getByText(/22:00/i)).toBeInTheDocument();

});


test('updateTimes function testing', () => {

    const {getByText} = render(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const resDate = screen.getByLabelText('res-date')
    //fireEvent.change(getByText(/reservationDate/i))
    //fireEvent.change(resDate, {target: {value: '2023-05-05'}})

    expect(getByText(/17:00/i)).toBeInTheDocument();
    
    //result = initializeTimes();
    //expect(result.first).toEqual("17:00");
    //expect("17:00").toEqual("17:00");
  });


test('Should apply required attribute to First Name', () => {
  
    const wrapper = mount(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const input = wrapper.find('#first-name');

    expect(input.prop('required')).toBe(true)


})

test('Should apply required attribute to Last Name', () => {
  
    const wrapper = mount(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const input = wrapper.find('#last-name');

    expect(input.prop('required')).toBe(true)


})

test('Should apply required attribute to ReservationDate', () => {
  
    const wrapper = mount(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const input = wrapper.find('#res-date');

    expect(input.prop('required')).toBe(true)


})

test('Should apply required attribute to ReservationTime', () => {
  
    const wrapper = mount(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const input = wrapper.find('#res-time');

    expect(input.prop('required')).toBe(true)


})

test('Should apply required attribute to no. of guests', () => {
  
    const wrapper = mount(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const input = wrapper.find('#guests');

    expect(input.prop('required')).toBe(true)


})

test('Should apply required attribute to Occasion', () => {
  
    const wrapper = mount(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const input = wrapper.find('#occasion');

    expect(input.prop('required')).toBe(true)


})

test('Should apply required attribute to Email', () => {
  
    const wrapper = mount(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const input = wrapper.find('#email');

    expect(input.prop('required')).toBe(true)


})

test('Should apply required attribute to Phone', () => {
  
    const wrapper = mount(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const input = wrapper.find('#phone');

    expect(input.prop('required')).toBe(true)


})

