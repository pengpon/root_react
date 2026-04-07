import { CheckBadgeIcon } from '@repo/ui';
import { Link } from 'react-router';

function PaymentSuccess() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-secondary/10 text-secondary">
        <CheckBadgeIcon className="size-12 animate-[bounce_2s_infinite]" />
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
      </div>
    </div>
  );
}

export default PaymentSuccess;
