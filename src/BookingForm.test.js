import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import BookingForm from './component/BookingForm';
import { mount, shallow } from 'enzyme';
import { getValue } from '@testing-library/user-event/dist/utils';


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

const setReservationData = () => {

}

const setAvailableTime = () => {

}

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

test('Should not have valid input in First Name field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const firstNameInput = screen.getByLabelText(/First Name:/)

    fireEvent.blur(firstNameInput);

    expect(getByText(/Not valid input First Name/i)).toBeInTheDocument()


})

test('Should have valid input in First Name field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} setReservationData={setReservationData} reservationData={reservationData} availableTime={availableTime}/>);
    const firstNameInput = screen.getByLabelText(/First Name:/)


    fireEvent.change(firstNameInput, { target: { value: 'Test' } })
    fireEvent.blur(firstNameInput);

    const span = screen.getByTitle('first-name-span')

    expect(span).toBeEmptyDOMElement()

})

test('Should not have valid input in Last Name field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const lastNameInput = screen.getByLabelText(/Last Name:/)

    fireEvent.blur(lastNameInput);

    expect(getByText(/Not valid input Last Name/i)).toBeInTheDocument()


})

test('Should have valid input in Last Name field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} setReservationData={setReservationData} reservationData={reservationData} availableTime={availableTime}/>);
    const lastNameInput = screen.getByLabelText(/Last Name:/)


    fireEvent.change(lastNameInput, { target: { value: 'Test' } })
    fireEvent.blur(lastNameInput);

    const span = screen.getByTitle('last-name-span')

    expect(span).toBeEmptyDOMElement()

})

test('Should not have valid input in ReservationDate field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} setAvailableTime={setAvailableTime} reservationData={reservationData} availableTime={availableTime}/>);
    const input = screen.getByLabelText(/Reservation Date:/)

    fireEvent.blur(input);

    expect(getByText(/Not valid input Reservation Date/i)).toBeInTheDocument()

})

test('Should have valid input in ReservationDate  field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} setAvailableTime={setAvailableTime} setReservationData={setReservationData} reservationData={reservationData} availableTime={availableTime}/>);
    const input = screen.getByLabelText(/Reservation Date:/)


    fireEvent.change(input, { target: { value: '2023-05-05' } })
    fireEvent.blur(input);

    const span = screen.getByTitle('res-date-span')

    expect(span).toBeEmptyDOMElement()

})

test('Should not have valid input in ReservationTime field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} setAvailableTime={setAvailableTime} reservationData={reservationData} availableTime={availableTime}/>);
    const input = screen.getByLabelText(/Reservation Time:/)

    fireEvent.blur(input);

    expect(getByText(/Not valid input Reservation Time/i)).toBeInTheDocument()

})

test('Should have valid input in ReservationTime  field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} setAvailableTime={setAvailableTime} setReservationData={setReservationData} reservationData={reservationData} availableTime={availableTime}/>);
    const input = screen.getByLabelText(/Reservation Time:/)


    fireEvent.change(input, { target: { value: '17:00' } })
    fireEvent.blur(input);

    const span = screen.getByTitle('res-time-span')

    expect(span).toBeEmptyDOMElement()

})

test('Should not have valid input in Number of guests field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const input = screen.getByLabelText(/Number of Guests:/)

    fireEvent.blur(input);

    expect(getByText(/Not valid input Number of Guests/i)).toBeInTheDocument()

})

test('Should have valid input in Number of Guests  field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} setReservationData={setReservationData} reservationData={reservationData} availableTime={availableTime}/>);
    const input = screen.getByLabelText(/Number of Guests:/)


    fireEvent.change(input, { target: { value: '2' } })
    fireEvent.blur(input);

    const span = screen.getByTitle('guests-span')

    expect(span).toBeEmptyDOMElement()

})

test('Should not have valid input in Occasion field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const input = screen.getByLabelText(/Occasion:/)

    fireEvent.blur(input);

    expect(getByText(/Not valid input Occasion/i)).toBeInTheDocument()

})

test('Should have valid input in Occasion  field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} setReservationData={setReservationData} reservationData={reservationData} availableTime={availableTime}/>);
    const input = screen.getByLabelText(/Occasion:/)


    fireEvent.change(input, { target: { value: 'Birthday' } })
    fireEvent.blur(input);

    const span = screen.getByTitle('occasion-span')

    expect(span).toBeEmptyDOMElement()

})

test('Should not have valid input in Email field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const input = screen.getByLabelText(/Email Address:/)

    fireEvent.blur(input);

    expect(getByText(/Not valid input Email/i)).toBeInTheDocument()

})

test('Should have valid input in Email field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} setReservationData={setReservationData} reservationData={reservationData} availableTime={availableTime}/>);
    const input = screen.getByLabelText(/Email Address:/)


    fireEvent.change(input, { target: { value: 'test@test.com' } })
    fireEvent.blur(input);

    const span = screen.getByTitle('email-span')

    expect(span).toBeEmptyDOMElement()

})

test('Should not have valid input in Phone field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} reservationData={reservationData} availableTime={availableTime}/>);
    const input = screen.getByLabelText(/Contact Number:/)

    fireEvent.blur(input);

    expect(getByText(/Not valid input Phone/i)).toBeInTheDocument()

})

test('Should have valid input in Phone field', () => {
  
    const {getByText} = render(<BookingForm reservations={reservations} setReservationData={setReservationData} reservationData={reservationData} availableTime={availableTime}/>);
    const input = screen.getByLabelText(/Contact Number:/)


    fireEvent.change(input, { target: { value: '111-373-8383' } })
    fireEvent.blur(input);

    const span = screen.getByTitle('phone-span')

    expect(span).toBeEmptyDOMElement()

})
