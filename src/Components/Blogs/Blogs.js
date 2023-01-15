import React from 'react';

const Blogs = () => {

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return (
        <div>
            <div className='bg-slate-50'>
                <section>
                    <div className='mx-20 pl-28'>
                        <img width={'900px'} height={'600px'} src="https://i.ibb.co/tDBnq6d/sms-banking-2.jpg" alt="" />
                    </div>
                    <div className='bg-slate-50'>
                        <div>
                            <h1 className='text-4xl'>Personal Blog</h1>
                            <h1 className='text-sm mt-2'>{day}/{month}/{year}</h1>
                            <div className='flex gap-2 justify-center mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" /> </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16"> <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" /> </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bookmark-heart-fill" viewBox="0 0 16 16"> <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" /> </svg>
                            </div>
                        </div>


                        <div>
                            <h1 className='text-3xl text-start pl-20'>SMS Banking</h1>
                            <div className='divider mx-20'></div>
                            <p className='mx-20 font-semibold text-start mt-5'>BDBL SMS Banking service for all banking transactions helps to prevent Fraud Transaction. To remain Worry Free, please active this service as soon as possible and for this please Visit the Nearest BBDL Branch as quickly as possible. Facilities available at present Access your account from anywhere in the world through a mobile phone. Ability to make balance inquiries without visiting the bank. Ability To Receive Mini Statement of Last 5 Transactions. Transaction Alert lets you get informed whenever there is a cash withdrawal/Deposit transaction on your account. Is registration Manadatory? Registration is mandatory for SMS Banking. For registration you have to visit your bank branch. Eligibility An account holder of Bangladesh Development Bank Ltd. Can get this Service Mobile Number for BDBL SMS Centre A single mobile no is used by BDBL SMS Centre to receive and send SMS messages based on the services chosen by the customers. The customers are provided with the mobile phone number in time of registration by the branches.: Is there any service charge for SMS Banking? SMS Banking Half Yearly fee is BDT 50, excluding VAT, per registered customer, for all his/ her accounts How to send SMS for the Last 5 Transaction Statement</p>
                        </div>
                    </div>
                    <div className='mt-6 bg-slate-50 flex flex-col gap-5 items-start justify-start mx-20'>
                            
                            <input type="text" name='comment' required placeholder='Write Your Comment' className="input input-bordered input-sm w-full max-w-xs"/>
                            
                            <button className='btn btn-success'>Comment</button>
                        
                        <div className='my-4 md:mx-12 mx-20'>
                            <hr />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Blogs;