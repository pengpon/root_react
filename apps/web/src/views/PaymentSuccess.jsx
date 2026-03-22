import { Link } from 'react-router';

function PaymentSuccess() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-secondary/10 text-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-12 animate-[bounce_2s_infinite]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
          />
        </svg>
      </div>

      <div className="text-center">
        <h1 className="mb-3 text-2xl font-bold tracking-tight text-brand lg:text-4xl">
          Order Confirmed!
        </h1>
        <p className="mb-10 text-base text-brand/60 lg:text-lg">
          Thank you for your purchase. <br />
          We've sent a confirmation email to your inbox.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link to="/products">
          <button className="w-full rounded-xl bg-brand px-8 py-3 text-sm font-bold text-white transition-all hover:bg-brand/90 active:scale-95 sm:w-auto">
            CONTINUE SHOPPING
          </button>
        </Link>
        {/* <Link to="/orders">
          <button className="w-full rounded-xl border border-[#2C3E2D]/10 bg-white px-8 py-3 text-sm font-bold text-[#2C3E2D] transition-all hover:bg-gray-50 active:scale-95 sm:w-auto">
            VIEW ORDER
          </button>
        </Link> */}
      </div>
    </div>
  );
}

export default PaymentSuccess;
