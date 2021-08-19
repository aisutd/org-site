import { useRef, useState } from 'react';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEmail = useRef(null);
  const inputFName = useRef(null);
  const inputLName = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEmail.current.value,
        first: inputFName.current.value,
        last: inputLName.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEmail.current.value = '';
    inputFName.current.value = '';
    inputLName.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to our mailing list.');
  };

  return (
    <div className="max-w-2xl mr-auto">
      <form onSubmit={subscribe}>
        {/* <label htmlFor="email-input">{'Email Address'}</label>
        <label htmlFor="first-name-input">{'First Name'}</label>
        <label htmlFor="last-name-input">{'Last Name'}</label> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4 text-black">
          <input
            id="first-name-input"
            name="first-name"
            placeholder="First Name"
            ref={inputFName}
            required
            type="fname"
            className="py-4 px-8 rounded-lg transition duration-400 hover:bg-ais-blue-gray"
          />
          <input
            id="last-name-input"
            name="last-name"
            placeholder="Last Name"
            ref={inputLName}
            required
            type="lname"
            className="py-4 px-8 rounded-lg transition duration-400 hover:bg-ais-blue-gray"
          />
          <input
            id="email-input"
            name="email"
            placeholder="Email"
            ref={inputEmail}
            required
            type="email"
            className="py-4 px-8 rounded-lg transition duration-400 hover:bg-ais-blue-gray sm:col-span-2"
          />
        </div>
        <div className="flex flex-wrap gap-4 items-center mt-4 justify-between">
          <button
            type="submit"
            className="transition duration-400 ease-in-out bg-blue-400 hover:bg-ais-dark-blue rounded-full text-white font-semibold"
          >
            <div className="py-4 px-8">Sign Up</div>
          </button>

          <div className="text-md py-4 text-red-600">{message ? message : null}</div>
        </div>
      </form>
    </div>
  );
}
