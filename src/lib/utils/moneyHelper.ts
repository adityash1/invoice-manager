/**
 * Takes all the line items and adds them up
 * @param {Array|undefined} lineItems
 * @returns {number}
 */
export const sumLineItems = (lineItems: LineItem[] | undefined): number => {
    if (!lineItems) return 0
    return lineItems.reduce((prevValue, curValue) => prevValue + curValue.amount, 0)
}

/**
 * Formats the given amount in Indian Rupees
 * @param {number} amount
 * @returns {string}
 */
export const formatInRupees = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
}

/**
 * Takes all the invoices and finds the total
 * @param {Invoice} invoices
 * @returns {number}
 */
export const sumInvoices = (invoices: Invoice[] | undefined): number => {
    if (!invoices) return 0
    return invoices.reduce((prevValue, curValue) => {
        const invoiceSum = sumLineItems(curValue.lineItems);
        return prevValue + invoiceSum;
    }, 0)
}