import { Property } from '@activepieces/pieces-framework';

// https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/api/dynamics_salesquote_create
export const salesQuotesEntityProps = {
	number: Property.ShortText({
		displayName: 'Number',
		required: false,
	}),
	documentDate: Property.DateTime({
		displayName: 'Quote Date',
		required: false,
	}),
	postingDate: Property.DateTime({
		displayName: 'Posting Date',
		required: false,
	}),
	customerId: Property.ShortText({
		displayName: 'Customer ID',
		required: false,
	}),
	customerNumber: Property.ShortText({
		displayName: 'Customer Number',
		required: false,
	}),
	customerName: Property.ShortText({
		displayName: 'Customer Name',
		required: false,
	}),
	billToName: Property.ShortText({
		displayName: 'Bill to Name',
		required: false,
	}),
	billToCustomerId: Property.ShortText({
		displayName: 'Bill to Customer ID',
		required: false,
	}),
	billToCustomerNumber: Property.ShortText({
		displayName: 'Bill to Customer Number',
		required: false,
	}),
	shipToName: Property.ShortText({
		displayName: 'Ship to Name',
		required: false,
	}),
	shipToContact: Property.ShortText({
		displayName: 'SHip to Contact',
		required: false,
	}),
	sellToAddressLine1: Property.ShortText({
		displayName: 'Sell to Address Line 1',
		required: false,
	}),
	sellToAddressLine2: Property.ShortText({
		displayName: 'Sell to Address Line 2',
		required: false,
	}),
	sellToCity: Property.ShortText({
		displayName: 'Sell to City',
		required: false,
	}),
	sellToCountry: Property.ShortText({
		displayName: 'Sell to Country',
		required: false,
	}),
	sellToState: Property.ShortText({
		displayName: 'Sell to State',
		required: false,
	}),
	sellToPostCode: Property.ShortText({
		displayName: 'Sell to Postalcode',
		required: false,
	}),
	billToAddressLine1: Property.ShortText({
		displayName: 'Bill to Address Line 1',
		required: false,
	}),
	billToAddressLine2: Property.ShortText({
		displayName: 'Bill to Address Line 2',
		required: false,
	}),
	billToCity: Property.ShortText({
		displayName: 'Bill to City',
		required: false,
	}),
	billToCountry: Property.ShortText({
		displayName: 'Bill to Country',
		required: false,
	}),
	billToState: Property.ShortText({
		displayName: 'Bill to State',
		required: false,
	}),
	billToPostCode: Property.ShortText({
		displayName: 'Bill to Postalcode',
		required: false,
	}),
	shipToAddressLine1: Property.ShortText({
		displayName: 'Ship to Address Line 1',
		required: false,
	}),
	shipToAddressLine2: Property.ShortText({
		displayName: 'Ship to Address Line 2',
		required: false,
	}),
	shipToCity: Property.ShortText({
		displayName: 'Ship to City',
		required: false,
	}),
	shipToCountry: Property.ShortText({
		displayName: 'Ship to Country',
		required: false,
	}),
	shipToState: Property.ShortText({
		displayName: 'Ship to State',
		required: false,
	}),
	shipToPostCode: Property.ShortText({
		displayName: 'Ship to Postalcode',
		required: false,
	}),
	currencyId: Property.ShortText({
		displayName: 'Currency ID',
		required: false,
	}),
	currencyCode: Property.ShortText({
		displayName: 'Currency Code',
		required: false,
	}),
	paymentTermsId: Property.ShortText({
		displayName: 'Payment Terms ID',
		required: false,
	}),
	shipmentMethodId: Property.ShortText({
		displayName: 'Shipment Method ID',
		required: false,
	}),
	salesperson: Property.ShortText({
		displayName: 'Sales Person',
		description: 'The salesperson code for the sales quote.',
		required: false,
	}),
	discountAmount: Property.Number({
		displayName: 'Discount Amount',
		description: 'The sales quote discount amount.',
		required: false,
	}),
	validUntilDate: Property.DateTime({
		displayName: 'Valid Until Date',
		description: 'The date a quote is valid until.',
		required: false,
	}),
	phoneNumber: Property.ShortText({
		displayName: 'Phone Number',
		description: "Specifies the sales quote's telephone number.",
		required: false,
	}),
	email: Property.ShortText({
		displayName: 'Email',
		description: "Specifies the sales quote's email address.",
		required: false,
	}),
	status: Property.StaticDropdown({
		displayName: 'Status',
		description: 'Specifies the status of the sales quote. ',
		required: false,
		options: {
			disabled: false,
			options: [
				{
					label: 'Draft',
					value: 'Draft',
				},
				{
					label: 'Sent',
					value: 'Sent',
				},
				{
					label: 'Accepted',
					value: 'Accepted',
				},
				{
					label: 'Expired',
					value: 'Expired',
				},
			],
		},
	}),
};
