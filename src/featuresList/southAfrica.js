export default {
    internetBanking: true,
    payment: true,
    fundTransfer: true,
    transactionHistory: true,
    foo: () => process.env.REACT_APP_COUNTRY === 'Indonesia'
}