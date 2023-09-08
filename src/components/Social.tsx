'use client'

import { usePathname } from 'next/navigation'

import {
    FacebookShareButton,
    FacebookIcon,
} from 'next-share'
import {
    TelegramShareButton,
    TelegramIcon,
} from 'next-share'
import {
    TwitterShareButton,
    TwitterIcon,
} from 'next-share'
import {
    WhatsappShareButton,
    WhatsappIcon,
} from 'next-share'
import {
    LinkedinShareButton,
    LinkedinIcon,
} from 'next-share'
import {
    EmailShareButton,
    EmailIcon,
} from 'next-share'

export default function Social({
    quote,
  }: {
    quote: string,
  }) {

    const pathname = usePathname()
    const origin = typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : '';

    return(
        <div className='flex flex-row  justify-end gap-3 p-6'>
            <FacebookShareButton
                url={`${origin}${pathname}`}
                quote={quote}
                hashtag={'#dorhro'}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TelegramShareButton
                url={`${origin}${pathname}`}
                title={quote}
            >
                <TelegramIcon size={32} round />
            </TelegramShareButton>
            <TwitterShareButton
                url={`${origin}${pathname}`}
                title={quote}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton
                url={`${origin}${pathname}`}
                title={quote}
                separator=":: "
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <LinkedinShareButton url={`${origin}${pathname}`}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <EmailShareButton
                url={`${origin}${pathname}`}
                subject={quote}
                body="body"
            >
                <EmailIcon size={32} round />
            </EmailShareButton>
        </div>
    )
}