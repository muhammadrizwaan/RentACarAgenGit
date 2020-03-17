export class GenericConstants {
  // // Local Access
  // static ApiURL = 'http://192.168.100.18/MainLMS/Service/CareemServices.svc/';

  // Local Access
  static ApiURL = 'https://www.google.com/';

  // // Public Access
  // static ApiURL = 'http://113.203.233.9/MainLMS/Service/CareemServices.svc/';

  static ServiceUserName = 'CareemUserName';
  static ServicePassword = 'CareemPasswordAPI123';
  static TripleDesKey = 'Shoaib';
  static SecretKey =
    'ba8474ecc65ed3e135342f7e99b4d1c7d0f722ba49de2a7da5c15387e7ece13f';

  static ApiHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  static ChannelId = 2;
}

export class ApiMethodNames {
  static CustomerLogin = 'CustomerLogin';
  static GetCustomerTransactionStatement = 'GetCustomerTransactionStatement';
}

export class UserDataKey {
  static FirstNameKey = 'FirstName';
  static EmailKey = 'Email';
  static MobileNoKey = 'MobileNo';
  static CNICKey = 'CNIC';
  static TempCustomerIdKey = 'TempCustomerId';
}

export class AlertTitles {
  static Error = 'Error';
  static Warning = 'Warning';
  static Success = 'Success';
  static ServerError = 'ServerError';
}

export class ErrorMessages {
  static UnknownServerError = 'Something went wrong, please try again later.';
  static EnterCardNo = 'Card number is mandatory.';
  static AllFieldsMandatory = 'All fields are mandatory.';
  static NameMandatory = 'Name field is mandatory.';
  static EmailMandatory = 'Email field is mandatory.';
  static PasswordMandatory = 'Password field is mandatory.';
  static ConfirmPasswordMandatory = 'Confirm Password field is mandatory.';
  static MismatchPassword = 'Password & Confirm Password doen not match.';
  static SelectTransactionType = 'Transaction type is not selected.';

  //Emergency Proj
  static AmountMandatory = 'Amount field is mandatory.';
  static TenureMandatory = 'Tenure field is mandatory.';
}

export class Responses {
  static Login = {
    Data: {
      Success: true,
      FirstName: 'Kumail Raza',
      Email: 'kumaillakhani@gmail.com',
      MobileNo: '3312194098',
      CNIC: '5656566565656',
      TempCustomerId: '1',
    },
  };

  static TransactionHistory = {
    Data: {
      Success: true,
      TransactionRecord: [
        {
          RowNum: '1',
          DateTime: 'Jul 28 2015  7:04PM',
          MerhcantName: 'Merchant One',
          MerhcantBranch: 'Timeshop Park Towers',
          Amount: '100.00',
          Points: '100.00',
          TransactionType: 'Redeem',
          Reference: '0',
        },
        {
          RowNum: '2',
          DateTime: 'Jul 28 2015  7:02PM',
          MerhcantName: 'Merchant One',
          MerhcantBranch: 'Timeshop Park Towers',
          Amount: '100.00',
          Points: '100.00',
          TransactionType: 'Redeem',
          Reference: '0',
        },
        {
          RowNum: '3',
          DateTime: 'Jul 28 2015  6:57PM',
          MerhcantName: 'Merchant One',
          MerhcantBranch: 'Timeshop Park Towers',
          Amount: '100.00',
          Points: '100.00',
          TransactionType: 'Redeem',
          Reference: '0',
        },
        {
          RowNum: '4',
          DateTime: 'Jun  9 2015  5:11PM',
          MerhcantName: 'Merchant One',
          MerhcantBranch: 'Timeshop Park Towers',
          Amount: '1000.00',
          Points: '1000.00',
          TransactionType: 'Redeem',
          Reference: '123',
        },
        {
          RowNum: '5',
          DateTime: 'Jun  9 2015  4:56PM',
          MerhcantName: 'Merchant One',
          MerhcantBranch: 'Timeshop Park Towers',
          Amount: '2822.00',
          Points: '4000.00',
          TransactionType: 'Redeem',
          Reference: '123',
        },
        {
          RowNum: '6',
          DateTime: 'Jun  9 2015  4:56PM',
          MerhcantName: 'Merchant One',
          MerhcantBranch: 'Timeshop Park Towers',
          Amount: '1178.00',
          Points: '4000.00',
          TransactionType: 'Award',
          Reference: '123',
        },
        {
          RowNum: '7',
          DateTime: 'Jun  2 2015 10:43AM',
          MerhcantName: 'Merchant Two',
          MerhcantBranch: 'Merchant Two',
          Amount: '10.00',
          Points: '10.00',
          TransactionType: 'Redeem',
          Reference: '22222',
        },
        {
          RowNum: '8',
          DateTime: 'Jun  2 2015 10:38AM',
          MerhcantName: 'Merchant Two',
          MerhcantBranch: 'Merchant Two',
          Amount: '0.00',
          Points: '12.00',
          TransactionType: 'Award',
          Reference: '11111',
        },
        {
          RowNum: '9',
          DateTime: 'Jun  2 2015 10:35AM',
          MerhcantName: 'Merchant Two',
          MerhcantBranch: 'Merchant Two',
          Amount: '0.00',
          Points: '10.00',
          TransactionType: 'Award',
          Reference: '1',
        },
        {
          RowNum: '10',
          DateTime: 'Jun  1 2015  5:16PM',
          MerhcantName: 'Merchant Two',
          MerhcantBranch: 'Merchant Two',
          Amount: '0.00',
          Points: '10.00',
          TransactionType: 'Award',
          Reference: '0',
        },
        {
          RowNum: '11',
          DateTime: 'Jun  1 2015  4:21PM',
          MerhcantName: 'Merchant Two',
          MerhcantBranch: 'Merchant Two',
          Amount: '0.00',
          Points: '7.00',
          TransactionType: 'Award',
          Reference: '0',
        },
        {
          RowNum: '12',
          DateTime: 'Jun  1 2015  4:19PM',
          MerhcantName: 'Merchant Two',
          MerhcantBranch: 'Merchant Two',
          Amount: '0.00',
          Points: '12.00',
          TransactionType: 'Award',
          Reference: '1111',
        },
        {
          RowNum: '13',
          DateTime: 'Jun  1 2015  4:17PM',
          MerhcantName: 'Merchant Two',
          MerhcantBranch: 'Merchant Two',
          Amount: '0.00',
          Points: '10.00',
          TransactionType: 'Award',
          Reference: '1111',
        },
      ],
      CurrentBalance: 0,
      BalanceExpiry: '',
      TotalRecords: '',
    },
  };
}
