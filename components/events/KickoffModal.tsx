import Link from 'next/link';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import { useState } from 'react';
import { ToggleOff } from '@material-ui/icons';

interface ModalProps {
  trigger: boolean;
}

export default function KickoffModal({ trigger }: ModalProps) {
  const [buttonPopup, setButtonPopup] = useState(true);
  return buttonPopup ? (
    <div className="fixed inset-0 bg-ais-white bg-opacity-75 flex items-center justify-center">
      <div className="relative">
        <button className="absolute right-0 -mr-10 -mt-10" onClick={() => setButtonPopup(false)}>
          <CloseRoundedIcon fontSize="large" />
        </button>
        <Link href="/events">
          <button>
            <img src="AISocial.gif" />
          </button>
        </Link>
      </div>
    </div>
  ) : null;
}
