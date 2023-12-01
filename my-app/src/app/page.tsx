import Image from 'next/image'

export default function Home() {

  const PartnerLogo = ({PARTNER}: {PARTNER:string}) => {

    console.log(PARTNER)
    return (
      <div className='shadow-lg rounded-lg'>
        <Image src={`/client_${PARTNER}.png`} width={630} height={175} alt={`${PARTNER}`}></Image>
      </div>
    )
  }

  const ServiceBox = ({label, text}: {label: string, text: string}) => {
    return (
      <div className='w-[360px] m-10 bg-gray-100 rounded-2xl p-6 flex flex-col items-center gap-6'>
        <div className='bg-black/25 w-20 h-20 rounded-full'>
        </div>
        <h1 className='text-xl font-bold tracking-wider text-center'>{label}</h1>
        <p className='text-center'>{text}</p>
      </div>
    )
  }

  return (
    <main>
      <div className='flex flex-col items-center bg-[url("/main_background.png")] h-[580px] p-14 gap-6 shadow-lg'>
        <h1 className='text-center text-5xl font-bold tracking-wide max-w-[1000px] leading-[75px]'>Empower Your Business with Software Solutions at Unbeatable Prices</h1>
        <p className='text-center tracking-wide max-w-[800px]'>Discover a curated collection of software solutions from top providers, all at discounted rates. Choose the services that fit your unique needs, whether you're a startup or an established enterprise.</p>
        <a href="" className='border-2 border-blue-400 text-blue-400 font-semibold bg-white rounded-md text-center px-24 py-5'>Get Started</a>
      </div>
      <span className='flex flex-row items-center justify-between border-t border-b border-1 border-blue-500 m-12'>
        <h1 className='font-bold text-4xl max-w-[500px] text-center m-8'>We help real people do more with money</h1>
        <div className='flex flex-row align-evenly gap-12'>
          <div className='m-7'>
            <h1 className='font-bold text-[42px]'>98%</h1>
            <p className='text-lg'>Client's Satisfaction</p>
          </div>
          <hr className='border-r h-[35px] border-blue-400 self-center' />
          <div className='m-7'>
            <h1 className='font-bold text-[42px]'>20%</h1>
            <p className='text-lg'>Decrease Expenses</p>
          </div>
          <hr className='border-r h-[35px] border-blue-400 self-center' />
          <div className='m-7'>
            <h1 className='font-bold text-[42px]'>2k+</h1>
            <p className='text-lg'>Active Users</p>
          </div>
        </div>
      </span>
      <span className='flex flex-row justify-evenly gap-12 m-14 mb-36'>
        <PartnerLogo PARTNER='KRATIKAL'/>
        <PartnerLogo PARTNER='OFOFO' />
        <PartnerLogo PARTNER='OUTBOUN' />
        <PartnerLogo PARTNER='RETAIL_EMPIRE' />
        <PartnerLogo PARTNER='SALESHIVE' />
        <PartnerLogo PARTNER='THREATCOP' />
        <PartnerLogo PARTNER='TITFI' />
        <PartnerLogo PARTNER='WARMY' />
      </span>
      <div>
        <h1 className='w-full text-center text-4xl font-bold tracking-wider'>Our Services</h1>
        <p className='text-center text-lg tracking-wide'>In a sea of software solutions, why settle for anything less than the best?</p>
        <div className='flex flex-row justify-center'>
          <ServiceBox label="Curated Marketplace" text="We've carefully selected the most trusted and innovative software providers to ensure you have access to the best solutions available."/>
          <ServiceBox label="Unbeatable Prices" text="We negotiate exclusive discounts with our partners, passing on savings directly to you."/>
          <ServiceBox label="Expert Guidance" text="Our team of experts is always here to help you find the perfect software solutions for your business needs."/>
          <ServiceBox label="Simplified Procurement" text="Our user-friendly platform makes it easy to compare, purchase, and manage your software subscriptions."/>
        </div>
      </div>
      <div className='bg-gray-700 flex flex-row h-screen'>
        <div className='flex flex-col'>
          <h1 className='text-white text-2xl'>Discover a world of software Possibilities</h1>
          <p className='text-white'>From productivity tools to creative suites, we offer a comprehensive selection of software solutions to empower your business.</p>
          <a href="" className='text-white px-12 py-3 bg-blue rounded-sm'>View All</a>
        </div>
        <div className='text-white text-center'>
          <p>more logos</p>
        </div>
      </div>
    </main>
  )
}
