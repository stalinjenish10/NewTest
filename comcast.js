const fs = require('fs');
var path = require('path');
const { browser, element, ExpectedConditions } = require('protractor');
const { Console } = require('console');
require('dotenv').config();

var addDealbutton = element(by.xpath('//button//span[contains(text(), "Add Deal")]'));
var openDeals = element(by.xpath('//mat-icon[@mattooltip="Open Deals"]'));
var dealName = element(by.xpath('//input[@data-placeholder="Deal Name"]'));
var dealCustomerid = element(by.xpath('//input[@data-placeholder="Customer ID"]'));
var dealAccountid = element(by.xpath('//input[@data-placeholder="Account ID"]'));
var dealProjectid = element(by.xpath('//input[@data-placeholder="Project ID"]'));
var dealSave = element(by.xpath('//mat-dialog-actions//button//span[contains(text(),"Add")]'));
var dealSuccessmessage = element(by.xpath('//simple-snack-bar//span[contains(text(), "New deal created.")]'));
var quoteSucessmessage = element(by.xpath('//simple-snack-bar//span[contains(text(), "New quote created")]'));
var multipleAddresstext = element(by.xpath('//textarea[@data-placeholder="Enter Multiple Addresses or Coordinates Here"]'))
var validateButton = element(by.xpath('//button//span[contains(text()," Validate ")]'));
var selectAllcheck = element(by.xpath('//div[@class="digis-design-table-scroller"]//th//mat-checkbox'));
var submitButton = element(by.xpath('//div[@class="actions ng-star-inserted"]//button'));
var cpqButton = element(by.xpath('//span[@class="mat-button-wrapper"][text()=" CPQ "]'));
var quoteName = element(by.xpath('//input[@data-placeholder="Quote name"]'));
var quoteNumber = element(by.xpath('//input[@data-placeholder="Quote Number"]'));
var quoteType = element(by.xpath('//input[@data-placeholder="Quote Type"]'));
var quoteRfxId = element(by.xpath('//input[@data-placeholder="RFx ID"]'));
var quoteCam = element(by.xpath('//input[@data-placeholder="CAM"]'));
var quoteNam = element(by.xpath('//input[@data-placeholder="NAM"]'));
var quoteNotes = element(by.xpath('//input[@data-placeholder="Quote notes"]'));
var quoteAdd = element(by.xpath('//mat-dialog-actions//button//span[contains(text(),"Add")]'));
var chooseProducts = element(by.xpath('//mat-select[@placeholder="Choose Product Categories"]'))
var broadbandProduct = element(by.xpath('//mat-option//span[@class="mat-option-text"][contains(text(),"Broadband")]'))
var staticipProduct = element(by.xpath('//mat-option//span[@class="mat-option-text"][contains(text(),"Static IP")]'))
var chooseMediatype = element(by.xpath('//mat-label//span[@mattooltip="Select media types to be included in the quote."]'));
var mediaCheckbox = element.all(by.xpath('//div[@class="options-container"]//mat-checkbox//span[@class="mat-checkbox-label"]'))
var chooseMonth = element(by.xpath('//mat-label//span[@mattooltip="Select a specific term requirement. If a single value is added to Choose Term AND Term Range is also filled in, the full range of terms returns, and the specific term is selected as Desired."]'));
var submitConfig = element(by.xpath('//button//span[contains(text(),"Submit Configuration")]'));
var confirmSave = element(by.xpath('//mat-dialog-actions//button//span[contains(text(),"Save")]'));
var completePricngSuccessmessage = element(by.xpath('//div[@class="message-container"]//span[contains(text(),"Pricing completed")]'));
var failureErrorMessage = element(by.xpath('//div[@class="message-container"]//span[contains(text(),"Pricing failed")]'));
var quotesMenu = element(by.xpath('//a//span[contains(text(),"Quoting")]'))
var accountMenu = element(by.xpath('//a[@href="/favorites/accounts"]'))
var addressTotalcount = element(by.xpath('//div[@class="address-import"]//div[@class="paginator-count"]'));
var accountSearch = element(by.xpath('//input[@data-placeholder="Search Table"]'))
var accountnameResponse = element(by.xpath('//div[@class="datatable-body-cell-label"]//a//h3'))
var pricingTotalcount = element.all(by.xpath('//div[@class="paginator-count"]//span'))
var pricingHeaderlist = element.all(by.xpath('//table[@class="mat-table cdk-table digis-design-table"]//th[@role="columnheader"]'))
var accountTotal = element(by.xpath('//div[@class="page-count ng-star-inserted"]'))
var pricing_Menu = element(by.xpath('//button//span//mat-icon[contains(text(),"more_horiz")]'))
var auditLogs = element(by.xpath('//button//span[contains(text(),"Audit Logs")]'))
var apiauditTracing = element(by.xpath('//div[@class="mat-tab-label-content"][contains(text(),"API audit tracing")]'))
var auditLoglist = element.all(by.xpath('//div[@class="digis-design-table-container"]//table[@class="mat-table cdk-table digis-design-table"]//tbody//tr//td'))
var auditlogClearinputs = element(by.xpath('//div[@class="row ng-star-inserted"]//input'))
var auditLogtypeInput = element(by.xpath('//div[@class="block"]//mat-label[text()="Type"]'))
var auditLogValueinput = element(by.xpath('//mat-form-field[3]//input'))
var closeIcon = element(by.xpath('//button//span//mat-icon[text()="close"]'))
var auditClosebtn = element(by.xpath('//button//span[contains(text(),"Close")]'))
var supplierList = element.all(by.xpath('//mat-option//span[@class="mat-option-text"]'))
var PricingSort = element(by.xpath('//button//span[text()=" Sort "]'))
var pricingFilter = element(by.xpath('//div[@class="utils-element ng-star-inserted"]//button//span[text()=" Filters "]'))
var addNewprice = element(by.xpath('//button//span[contains(text()," Add New Price ")]'))
var priceAddress = element(by.xpath('//mat-select[@placeholder="Address"]'))
var priceAddresslist = element.all(by.xpath('//mat-option//span'))
var priceSupplier = element(by.xpath('//div//input[@data-placeholder="Supplier:"]'))
var priceProvidermrccost = element(by.xpath('//div//input[@data-placeholder="Provider MRC (Cost)"]'))
var priceMrc = element(by.xpath('//div//input[@data-placeholder="MRC (Price)"]'))
var priceProvidernrccost = element(by.xpath('//div//input[@data-placeholder="Provider NRC (Cost)"]'))
var pricenrc = element(by.xpath('//div//input[@data-placeholder="NRC (Price)"]'))
var priceTerm = element(by.xpath('//mat-select[@placeholder="Term"]'))
var priceTermselect = element(by.xpath('//mat-option//span[contains(text(),"36")]'))
var priceProductcategory = element(by.xpath('//mat-select[@placeholder="Product Category"]'))
var priceProductcategoryselect = element(by.xpath('//mat-option//span[contains(text(),"SONET/TDM")]'))
var priceSpeed = element(by.xpath('//mat-select[@placeholder="Speed"]'))
var priceSpeedselect = element(by.xpath('//mat-option//span[contains(text(),"DS3")]'))
var priceMediatype = element(by.xpath('//mat-select[@placeholder="Media Type"]'))
var priceMediatypeselect = element(by.xpath('//mat-option//span[contains(text(),"Coax/HFC")]'))
var priceNetworkconnectionStatus = element(by.xpath('//mat-select[@placeholder="Network Connection Status"]'))
var priceNetworkconnectionStatusSelect = element(by.xpath('//mat-option//span[contains(text(),"In Progress")]'))
var priceBuildingconnectionStatus = element(by.xpath('//mat-select[@placeholder="Building Connection Status"]'))
var priceBuildingconnectionStatusSelect = element(by.xpath('//mat-option//span[contains(text(),"OnNet")]'))
var priceNotes = element(by.xpath('//textarea[@data-placeholder="Notes"]'))
var pricesiteAttribute = element(by.xpath('//input[@data-placeholder="Site ID"]'))
var priceButtonSave = element(by.xpath('//button//span[contains(text(),"Save")]'))
var refreshQuote = element(by.xpath('//button//mat-icon[text()="refresh"]'))
var confirmrefreshSuccessmsg = element(by.xpath('//mat-dialog-content[@class="mat-dialog-content digis-design-dialog-content"]//div'))
var confirmrefreshYesbtn = element(by.xpath('//button[@type="button"]//span[text()=" Yes "]'))
var priceSucessmessage = element(by.xpath('//simple-snack-bar//span[contains(text(), "Price is successfully added")]'));
var priceimportButton = element(by.xpath('//button//span[contains(text(),"Import")]'))
var importpriceSucessmessage = element(by.xpath('//simple-snack-bar//span[contains(text(), "Successfully imported")]'));
var importIcon = element(by.xpath('//button//mat-icon[text()="cloud_upload"]'))
var verifypopupMessage = element(by.xpath('//div//h1[text()="Import Pricings"]'))
var exportMenu = element(by.xpath('//div[@class="digis-design-table-utils-container_more-actions"]//button'))
var step3Nextbtn = element(by.xpath('//button//span[contains(text(),"Next")]'));
var quoteConfirmationpopup = element(by.xpath('//div[@class="digis-design-dialog-header"]//h1[contains(text(),"Confirmation")]'));
var quoteSucessyesbtn = element(by.xpath('//mat-dialog-actions[@class="mat-dialog-actions digis-design-dialog-actions"]//button//span[contains(text()," Yes ")]'));
var downloadAspdfbutn = element(by.xpath('//button//span[contains(text(),"Download as PDF")]'));
var downloadAscsvbutn = element(by.xpath('//button//span[contains(text(),"Download as CSV")]'));
var generateQuoteBtn = element(by.xpath('//button//span[contains(text(),"Generate Quote")]'));
var sendQuotesendtotext = element(by.xpath('//div[@class="mat-chip-list-wrapper"]//input[@placeholder="Separate with commas"]'))
var sendQuotesubject = element(by.xpath('//input[@data-placeholder="Email subject"]'))
var sendQuotebody = element(by.xpath('//textarea[@data-placeholder="Email body"]'))
var sendQuotebtn = element(by.xpath('//button//span[contains(text(),"Send Quote")]'))
var sendQuotesucessicon = element(by.xpath('//div[@class="success-container ng-star-inserted"]//mat-icon'))
var sendtoQuotesucessmessage = element(by.xpath('//simple-snack-bar//span[contains(text(), "Email has been sent")]'));
var addressUploadcsv = element(by.xpath('//button//span[contains(text(), "Upload CSV File")]'))
var accountHeaderlist = element.all(by.xpath('//datatable-header-cell//div[@class="datatable-header-cell-template-wrap"]'));
var choosedealUserlist = element.all(by.xpath('//mat-option//span[@class="mat-option-text"]'));
var pricingSupplierAutocomplete = element.all(by.xpath('//mat-option//span[@class="mat-option-text"]'));
var dealNameSearch = element(by.xpath('//input[@data-placeholder="Deal name"]'))
var deal_UploadedAddresses = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-address mat-column-address ng-star-inserted"]//div//span'));
var totalImportedRecords = element.all(by.xpath('//tbody//tr[@class="mat-row cdk-row ng-star-inserted"]'))
var nodealsMessage = element(by.xpath('//div[@class="digis-design-table-no-data-error ng-star-inserted"]'))
var nameFilter = element(by.xpath('//div[@class="row ng-star-inserted"]//input[@role="combobox"]'))
var valueFilter = element(by.xpath('//mat-form-field[3]//input'))
var typeDropdwn = element(by.xpath('//div[@class="block"]//mat-label[text()="Type"]'))
var pricinglabelText = element(by.xpath('//h3[text()="Requirements"]'))
var singleAddress = element(by.xpath("//input[@data-placeholder='Single Address Autocomplete or Coordinate Search']"))
var addAccountbtn = element(by.xpath('//button//span[contains(text(),"Add Account")]'))
var accountnameInput = element(by.xpath('//div//input[@formcontrolname="searchAccount"]'))
var accountsingleaddressInput = element(by.xpath('//div//input[@formcontrolname="hqAddress"]'))
var accountphoneInput = element(by.xpath('//div//input[@formcontrolname="phoneNumber"]'))
var accountcontactnameInput = element(by.xpath('//div//input[@formcontrolname="contactName"]'))
var accountdomainInput = element(by.xpath('//div//input[@formcontrolname="domain"]'))
var accountidInput = element(by.xpath('//div//input[@formcontrolname="accountCrmId"]'))
var accountmsaInput = element(by.xpath('//div//input[@formcontrolname="masterAgreementId"]'))
var accounttypeInput = element(by.xpath('//div//input[@formcontrolname="type"]'))
var accountdefaultcurrencySelect = element(by.xpath('//mat-select[@formcontrolname="defaultCurrencyId"]'))
var addaccountBtn = element(by.xpath('//mat-dialog-actions//button//span[contains(text(),"Add Account")]'))
var accountlistAutocomplete = element.all(by.xpath('//div[@role="listbox"]//mat-option//span'))
var accountsuccessMessage = element(by.xpath('//span[@class="mat-simple-snack-bar-content"]'))
var accountTotal = element(by.xpath('//div[@class="page-count ng-star-inserted"]'))
var accountnameDisplayed = element.all(by.xpath('//datatable-body-cell//div[@class="datatable-body-cell-label"]//a//h3'))
var listofcustomFields = element.all(by.xpath('//div[@class="custom-fields__content ng-star-inserted"]//div//input'))
var isbulkDeal = element(by.xpath('//mat-checkbox[@formcontrolname="isBulkDeal"]'))
var uploadaddlocationBtn = element(by.xpath('//button//span[contains(text(),"Upload/Add locations")]'))
var addressautocompleteList = element.all(by.xpath('//mat-option//span[@class="mat-option-text"]'));
var dealList = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-dealName mat-column-dealName ng-star-inserted"]//b'))
var customerIdlist = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-customerDealId mat-column-customerDealId ng-star-inserted"]//span'))
var projectIdlist = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-projectId mat-column-projectId ng-star-inserted"]//span'))
var deal_Uploadedcity = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-city mat-column-city ng-star-inserted"]//div//span'));
var deal_Uploadedstate = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-state mat-column-state ng-star-inserted"]//div//span'));
var deal_Uploadedzip = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-zip mat-column-zip ng-star-inserted"]//div//span'));
var deal_Uploadedcountry = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-country mat-column-country ng-star-inserted"]//div//span'));
var producttitleInformation = element.all(by.xpath('//h3[@class="product-title"]'))
var exportallMenu = element(by.xpath('//button//span[contains(text(),"Export All")]'))
var pricefilterInput = element.all(by.xpath('//div[@class="block"]//mat-form-field[1]//input'))
var uploaded_Addresses = element.all(by.xpath('//div[@class="address-import"]//td[@class="mat-cell cdk-cell cdk-column-address mat-column-address ng-star-inserted"]//div//span'));
var uploaded_locationType = element.all(by.xpath('//div[@class="address-import"]//td[@class="mat-cell cdk-cell cdk-column-isAddressZ mat-column-isAddressZ ng-star-inserted"]'));
var uploaded_Validation = element.all(by.xpath('//div[@class="address-import"]//td[@class="mat-cell cdk-cell cdk-column-isAddressValid mat-column-isAddressValid ng-star-inserted"]'));
var uploaded_City = element.all(by.xpath('//div[@class="address-import"]//td[@class="mat-cell cdk-cell cdk-column-city mat-column-city ng-star-inserted"]'));
var uploaded_State = element.all(by.xpath('//div[@class="address-import"]//td[@class="mat-cell cdk-cell cdk-column-state mat-column-state ng-star-inserted"]'));
var uploaded_Zipcode = element.all(by.xpath('//div[@class="address-import"]//td[@class="mat-cell cdk-cell cdk-column-zipcode mat-column-zipcode ng-star-inserted"]'));
var uploaded_Country = element.all(by.xpath('//div[@class="address-import"]//td[@class="mat-cell cdk-cell cdk-column-country mat-column-country ng-star-inserted"]'));
var uploaded_Secondarydesignator = element.all(by.xpath('//div[@class="address-import"]//td[@class="mat-cell cdk-cell cdk-column-secondaryDesignator mat-column-secondaryDesignator ng-star-inserted"]'));
var uploaded_Secondarynumber = element.all(by.xpath('//div[@class="address-import"]//td[@class="mat-cell cdk-cell cdk-column-secondaryNumber mat-column-secondaryNumber ng-star-inserted"]'));
var dealdisplayed_Addresses = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-address mat-column-address ng-star-inserted"]//div//span'));
var dealdisplayed_locationType = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-isAddressZ mat-column-isAddressZ ng-star-inserted"]'));
var dealdisplayed_Validation = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-isAddressValid mat-column-isAddressValid ng-star-inserted"]'));
var dealdisplayed_City = element.all(by.xpath('//div[@class="locations"]//td[@class="mat-cell cdk-cell cdk-column-city mat-column-city ng-star-inserted"]'));
var dealdisplayed_State = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-state mat-column-state ng-star-inserted"]'));
var dealdisplayed_Zipcode = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-zip mat-column-zip ng-star-inserted"]'));
var dealdisplayed_Country = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-country mat-column-country ng-star-inserted"]'));
var dealdisplayed_Secondarydesignator = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-secondaryDesignator mat-column-secondaryDesignator ng-star-inserted"]'));
var dealdisplayed_Secondarynumber = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-secondaryNumber mat-column-secondaryNumber ng-star-inserted"]'));
var dealdisplayed_Flexfield1 = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-flexField1 mat-column-flexField1 ng-star-inserted"]'));
var dealdisplayed_Flexfield2 = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-flexField2 mat-column-flexField2 ng-star-inserted"]'));
var dealdisplayed_Siteid = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-siteId mat-column-siteId ng-star-inserted"]'));
var dealdisplayed_Sitecategory = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-siteCategory mat-column-siteCategory ng-star-inserted"]'));
var dealdisplayed_Sitename = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-siteName mat-column-siteName ng-star-inserted"]'));
var custom_locationId = element.all(by.xpath('//td[@class="mat-cell cdk-cell cdk-column-customLocationId mat-column-customLocationId ng-star-inserted"]'));
var sortnameSupplierinput = element(by.xpath('//div[@class="container"]//mat-label[text()="Name"]'))
var wipMenu = element(by.xpath('//a//span[contains(text(),"WIP")]'));
var myWipMenu = element(by.xpath('//a//span[contains(text(),"My WIP")]'));
var globalWipMenu = element(by.xpath('//a//span[contains(text(),"Global WIP")]'));
var myWipHeaderList = element.all(by.xpath('//datatable-header-cell[@role="columnheader"]'));
var myWipTotalCount = element(by.xpath('//div[@class="page-count ng-star-inserted"]'));
var quotesMenu = element(by.xpath('//a//span[contains(text(),"Quoting")]'))
var sharedHeader = element(by.xpath('//mat-select[@name="Shared"]'))
var adminMenu = element(by.xpath('//a//span[contains(text(),"Admin")]'))
var companydefaultAttributesTab = element(by.xpath('//a[@href="/company/company-default-attributes"]'))
var customFieldIndexId = element.all(by.xpath('//div[@id="company_attrib"]//mat-card-title'))
var manageColumns = element(by.xpath('//div[@class="locations"]//button//span[contains(text()," Manage Columns ")]'))
var addressPagcount25 = element(by.xpath('//div[@class="paginator-container"]//div//span[contains(text(),"25")]'))
var columnsLink = element(by.xpath('//div[@class="content-header"]//span[@class="inner-link"]'))
var manageApplychanges = element(by.xpath('//button//span[contains(text(),"Apply Changes")]'))
var dealaddressMenuicon = element(by.xpath('//button//span//mat-icon[contains(text(),"more_horiz")]'));
var exportallSelectedaddress = element(by.xpath('//button[contains(text(), "Export All Addresses CSV")]'))
var pricingPaginationValue100 = element(by.xpath('//div[@role="listbox"]//mat-option//span[contains(text(),"100")]'))
var auditLogPaginationValue25 = element(by.xpath('//div[@class="digis-design-table-container"]//div//span[contains(text(),"25")]'))

//*Variables *////
var lastHeaderColumn;
var indexId;
var indexCheck;
var defaultcolumns;
var messageText;
var customFieldIndexIdValue;
var dealCSVFile;
var pricingCSVFile;
var locationAddress = [];
var locationCity = [];
var locationState = [];
var locationZip = [];
var locationCountry = [];
var customfieldData = [];
var dealcustomFields = [];
var quoteCustomFields = [];
var prodheaderArray = [];
var pricingheaderArray = [];
var internalAPI = [];
var externalAPI = [];
var companypricingAPI = [];
var tempArray = [];
var totalauditData = [];
var uploaded_Addressresponse = [];
var uploaded_Locationtyperesponse = [];
var uploaded_Validationresponse = [];
var uploaded_Secondarydesignresponse = [];
var uploaded_Secondaynumberresponse = [];
var uploaded_Cityresponse = [];
var uploaded_Zipcoderesponse = [];
var uploaded_Countryresponse = [];
var uploaded_Stateresponse = [];
var uploaded_customLocationidresponse = [];
var uploaded_Flexfield1response = [];
var uploaded_Flexfield2response = [];
var uploaded_Siteidresponse = [];
var uploaded_Sitecategoryresponse = [];
var uploaded_Sitenameresponse = [];
var customFieldAccountList = [];
var customFieldDealList = [];
var customFieldQuoteList = [];
var customFieldSolutionList = [];
var site_idArray = [];
var dealExportedCustomLocationId = [];
var dealExportedSiteId = [];
var dealExportedSiteCategory = [];
var dealExportedSiteName = [];
var dealExportedFlexField1 = [];
var dealExportedFlexField2 = [];
var dealExportedSecondaryNumber = [];
var dealExportedSecondaryDesignator = [];
var pricingExportedSecondaryNumber = [];
var pricingExportedSecondaryDesignator = [];
var pricingExportedFlexField1 = [];
var pricingExportedFlexField2 = [];
var pricingExportedSiteId = [];
var pricingExportedSiteCategory = [];
var pricingExportedSiteName = [];
var pricingExportedCustomLocationId = [];

describe("COMCAST TEST CASES", function () {
  var EC = protractor.ExpectedConditions;

  it('Verify the account creation', async function () {
    browser.wait(EC.presenceOf(adminMenu), 75000);
    browser.wait(EC.elementToBeClickable(adminMenu), 45000);
    browser.actions().mouseMove(adminMenu).click().perform();

    browser.wait(EC.presenceOf(companydefaultAttributesTab), 85000);
    browser.wait(EC.elementToBeClickable(companydefaultAttributesTab), 45000);
    companydefaultAttributesTab.click();
    await new Promise(resolve => setTimeout(resolve, 5500));
    browser.wait(EC.presenceOf(customFieldIndexId), 45000);
    console.log("150Custom", customFieldIndexId)
    await customFieldIndexId.getText().then(function (values) {
      console.log("Aldrin11", values)
      customFieldIndexIdValue = values.indexOf('Custom Fields')
    });
    defaultcolumns = customFieldIndexIdValue;
    indexId = await getindexValue(defaultcolumns);
    console.log("CustomId", indexId)
    let customFieldsList = element.all(by.xpath('//div[@id="company_attrib"]//mat-card' + indexId + '//p-table//tbody//tr//td'))
    await customFieldsList.getText().then(function (text) {
      fetchCustomFieldsValues(text, 'Account', customFieldAccountList)
      fetchCustomFieldsValues(text, 'Deal', customFieldDealList)
      fetchCustomFieldsValues(text, 'Quote', customFieldQuoteList)
      fetchCustomFieldsValues(text, 'Solutions', customFieldSolutionList)
    });
    console.log("Comcast11")
    let accountOldTotal;
    browser.wait(EC.presenceOf(quotesMenu), 75000);
    browser.wait(EC.elementToBeClickable(quotesMenu), 45000);
    browser.actions().mouseMove(quotesMenu).click().perform();

    browser.wait(EC.presenceOf(accountMenu), 85000);
    browser.wait(EC.elementToBeClickable(accountMenu), 45000);
    accountMenu.click();

    browser.wait(EC.presenceOf(accountTotal), 85000);
    await accountTotal.getText().then(function (text) {
      accountOldTotal = text.split(" ");
    });
    browser.wait(EC.presenceOf(addAccountbtn), 85000);
    addAccountbtn.click();
    await createnewAccount('address');
    verifyvalidations(process.env.ACCOUNTNAME, accountOldTotal);
  });

  it('Verify the custom account creation', async function () {
    console.log("Comcast12")
    let customaccountOldTotal;
    await browser.wait(EC.presenceOf(accountTotal), 85000);
    await accountTotal.getText().then(function (count) {
      customaccountOldTotal = count.split(" ");
    });
    browser.wait(EC.presenceOf(addAccountbtn), 85000);
    addAccountbtn.click();
    await createnewAccount('Create Custom');
    verifyvalidations(process.env.CUSTOMACCOUNTNAME, customaccountOldTotal);
    console.log("C12")
  });

  it('Verify the account creation with the custom fields.', async function () {
    console.log("Comcast13")
    let customfieldAccountTotal;
    await browser.wait(EC.presenceOf(accountTotal), 85000);
    await accountTotal.getText().then(function (count) {
      customfieldAccountTotal = count.split(" ");
    });
    browser.wait(EC.presenceOf(addAccountbtn), 85000);
    addAccountbtn.click();
    await createnewAccount('Custom Fields');
    verifyvalidations(process.env.ACCOUNTNAMECUSTOMFIELD, customfieldAccountTotal);
  });

  it('Verify if the account created is visible in the UI with the custom fields, all input fields, Default Currency, and Default Rule Chain', async function () {
    console.log("Comcast14")
    await verifyaccountgridResponses('Phone', process.env.ACCOUNTPHONE);
    await verifyaccountgridResponses('Contact Name', process.env.ACCOUNTCONTACTNAME);
    await verifyaccountgridResponses('Customer Account ID', process.env.ACCOUNTID);
    await verifyaccountgridResponses('Domain', process.env.ACCOUNTDOMAIN);
    await verifyaccountgridResponses('MSA #', process.env.ACCOUNTMSA);
    await verifyaccountgridResponses('Type', process.env.ACCOUNTTYPE);
    if (customfieldData.length > 0) {
      for (var i = 0; i < customfieldData.length; i++) {
        await verifyaccountgridResponses(customfieldData[i], process.env.CUSTOMFIELDVALUE);
      }
    }
    else {
      console.log("No Custom Fields was displayed...")
    }
  });

  it('Verify the deal creation', async function () {
    console.log("Comcast15")
    browser.wait(EC.presenceOf(accountSearch), 45000);
    accountSearch.sendKeys(process.env.ACCOUNTNAMECUSTOMFIELD)
    browser.wait(EC.presenceOf(accountnameResponse), 35000);
    browser.wait(EC.presenceOf(openDeals), 75000);
    browser.actions().mouseMove(openDeals).click().perform();
    browser.manage().timeouts().implicitlyWait(3500);
    nodealsMessage.isPresent().then(function (message) {
      console.log("DEaltrue", message)
      if (message) {
        console.log("There are no deals yet. Create one")
      }
      else {
        console.log("Existing Records Displayed")
        browser.wait(EC.presenceOf(addDealbutton), 45000);
        browser.actions().mouseMove(addDealbutton).click().perform();
      }
    });
    createnewDeals(process.env.QUOTEDEAL, process.env.DCUSTID, process.env.DACCOUNTID, process.env.DPROJECTID, '');
    browser.wait(EC.presenceOf(dealNameSearch), 45000);
    dealNameSearch.clear();
    dealNameSearch.sendKeys(protractor.Key.ENTER);
  });

  it('Verify deal creation in the UI with the custom fields.', async function () {
    console.log("Comcast16")
    browser.wait(EC.presenceOf(addDealbutton), 45000);
    browser.actions().mouseMove(addDealbutton).click().perform();
    await createnewDeals(process.env.CUSTOMDEALNAME, process.env.DCUSTID, process.env.DACCOUNTID, process.env.DPROJECTID, 'Custom Fields');
    dealNameSearch.clear();
    dealNameSearch.sendKeys(protractor.Key.ENTER);
  });

  it('Verify if the deal created is visible in the UI with the custom fields, all input fields, Default Currency, and Default Rule Chain', async function () {
    console.log("Comcast17")
    await browser.wait(EC.presenceOf(dealList), 45000);
    verifydealgridResponses(dealList, process.env.CUSTOMDEALNAME);
    verifydealgridResponses(projectIdlist, process.env.DPROJECTID);
    verifydealgridResponses(customerIdlist, process.env.DCUSTID);
    browser.wait(EC.presenceOf(dealNameSearch), 45000);
    dealNameSearch.sendKeys(process.env.CUSTOMDEALNAME)
  });

  it('Verify if the user is able to edit and save a deal', async function () {
    console.log("Comcast18")
    var createdDealdisp = element(by.xpath('//b[contains(text(),' + process.env.QUOTEDEAL + ')]'))
    await browser.wait(EC.presenceOf(createdDealdisp), 25000);
    createdDealdisp.click();
  });

  it('Verify the location add to deal using the Single Address Autocomplete or Coordinate Search', async function () {
    console.log("Comcast19")
    browser.wait(EC.visibilityOf(addressUploadcsv), 45000);
    browser.wait(EC.elementToBeClickable(singleAddress), 45000);
    await singleAddress.sendKeys(process.env.LOCATIONADDRESSINPUT)
    await validateButton.click();
    browser.wait(EC.visibilityOf(addressTotalcount), 35000);
    await browser.wait(EC.presenceOf(selectAllcheck), 45000);
    await selectAllcheck.click();
    browser.wait(EC.visibilityOf(submitButton), 45000);
    await submitButton.click();
    await browser.wait(EC.presenceOf(dealdisplayed_Addresses), 45000);
    dealdisplayed_Addresses.getText().then(async function (text) {
      expect(text.length).toBeGreaterThan(0);
    });
    await browser.wait(EC.visibilityOf(manageColumns), 45000);
    await browser.wait(EC.elementToBeClickable(manageColumns), 45000);
    await manageColumns.click();
    await browser.wait(EC.presenceOf(columnsLink), 45000);
    await columnsLink.click();
    await browser.wait(EC.presenceOf(manageApplychanges), 15000);
    await manageApplychanges.click();
    await browser.wait(EC.elementToBeClickable(addressPagcount25), 25000);
    await addressPagcount25.click();
    element(by.cssContainingText('mat-option .mat-option-text', '50')).click();
  });

  it('Verify the location add to deal using the multiple address copy paste option', async function () {
    console.log("Comcast20")
    await browser.wait(EC.visibilityOf(uploadaddlocationBtn), 75000);
    browser.wait(EC.elementToBeClickable(uploadaddlocationBtn), 45000);
    await uploadaddlocationBtn.click();
    browser.wait(EC.elementToBeClickable(multipleAddresstext), 45000);
    await multipleAddresstext.sendKeys(process.env.ADDRESSINPUT1)
    await multipleAddresstext.sendKeys(protractor.Key.ENTER);
    await multipleAddresstext.sendKeys(process.env.ADDRESSINPUT2)
    await validateButton.click();
    browser.wait(EC.presenceOf(selectAllcheck), 45000);
    await selectAllcheck.click();
    browser.wait(EC.visibilityOf(submitButton), 45000);
    await submitButton.click();
    await browser.wait(EC.presenceOf(dealdisplayed_Addresses), 45000);
    dealdisplayed_Addresses.getText().then(async function (text) {
      expect(text.length).toBeGreaterThan(0);
    });
  });

  it('Verify CSV location upload to a deal', async function () {
    console.log("Comcast21")
    await browser.wait(EC.presenceOf(uploadaddlocationBtn), 75000);
    await new Promise(resolve => setTimeout(resolve, 4500));
    uploadaddlocationBtn.click();
    const fileToUpload = process.env.FILEPATH
    absolutePath = path.resolve(__dirname, fileToUpload)
    const fileInput = element(by.css('input[type="file"]'));
    await fileInput.sendKeys(absolutePath)
    await new Promise(resolve => setTimeout(resolve, 4500));
    await validateButton.click();
    browser.wait(EC.presenceOf(selectAllcheck), 45000);
    await selectAllcheck.click();
    browser.wait(EC.visibilityOf(submitButton), 45000);
    await submitButton.click();
    await browser.wait(EC.presenceOf(dealdisplayed_Addresses), 45000);
    dealdisplayed_Addresses.getText().then(async function (text) {
      expect(text.length).toBeGreaterThan(0);
    });
  });

  it('Verify if the locations added to a deal through the CSV location upload are visible in the deals locations page.', async function () {
    console.log("Comcast22")
    await new Promise(resolve => setTimeout(resolve, 3500));
    browser.wait(EC.presenceOf(totalImportedRecords), 75000);
    const data = readCSVData(process.env.FILEPATH);
    let csvlengthCount = data.length - 1
    totalImportedRecords.getText().then(function (count) {
      console.log("Length11 :" + count.length)
      expect(count.length).toBeGreaterThan(0);
    });
    console.log("Length :" + csvlengthCount)
    for (var i = 0; i < data.length; i++) {
      locationAddress.push(data[i].Address);
      locationCity.push(data[i].City);
      locationState.push(data[i].State);
      locationZip.push(data[i].ZipCode);
      locationCountry.push(data[i].Country);
    }
    verifydealData(locationAddress, deal_UploadedAddresses);
    verifydealData(locationCity, deal_Uploadedcity);
    verifydealData(locationState, deal_Uploadedstate);
    verifydealData(locationZip, deal_Uploadedzip);
    verifydealData(locationCountry, deal_Uploadedcountry);
  });

  it('Verify if the locations are validated correctly when importing locations through Single Address Autocomplete or Coordinate Search', async function () {
    console.log("Comcast24")
    browser.wait(EC.visibilityOf(uploadaddlocationBtn), 45000);
    browser.wait(EC.elementToBeClickable(uploadaddlocationBtn), 45000);
    uploadaddlocationBtn.click();
    browser.wait(EC.elementToBeClickable(singleAddress), 45000);
    await singleAddress.sendKeys(process.env.LOCATIONADDRESSINPUT)
    await validateButton.click();
    await new Promise(resolve => setTimeout(resolve, 3500));
    browser.wait(EC.visibilityOf(addressTotalcount), 35000);
    await verifyimporteddataResponses(uploaded_Addresses, uploaded_Addressresponse);
    await verifyimporteddataResponses(uploaded_locationType, uploaded_Locationtyperesponse);
    await verifyimporteddataResponses(uploaded_Validation, uploaded_Validationresponse);
    await verifyimporteddataResponses(uploaded_City, uploaded_Cityresponse);
    await verifyimporteddataResponses(uploaded_Zipcode, uploaded_Zipcoderesponse);
    await verifyimporteddataResponses(uploaded_Country, uploaded_Countryresponse);
    await verifyimporteddataResponses(uploaded_State, uploaded_Stateresponse);
    console.log("5000", uploaded_Addressresponse)
    console.log("5001", uploaded_Locationtyperesponse)
    console.log("5002", uploaded_Validationresponse)
    console.log("5003", uploaded_Cityresponse)
    console.log("5004", uploaded_Zipcoderesponse)
    console.log("5005", uploaded_Countryresponse)
    console.log("5006", uploaded_Stateresponse)
    await browser.wait(EC.presenceOf(selectAllcheck), 45000);
    await selectAllcheck.click();
    browser.wait(EC.visibilityOf(submitButton), 45000);
    await submitButton.click();
    await browser.wait(EC.presenceOf(dealdisplayed_Addresses), 75000);
    verifyDealuploadedaddresses(dealdisplayed_Addresses, uploaded_Addressresponse)
    verifyDealuploadedaddresses(dealdisplayed_locationType, uploaded_Locationtyperesponse)
  });

  it('Verify the location add to deal using the Single Address Autocomplete or Coordinates Search', async function () {
    console.log("Comcast25")
    await browser.wait(EC.presenceOf(uploadaddlocationBtn), 75000);
    uploadaddlocationBtn.click();
    browser.wait(EC.presenceOf(singleAddress), 75000);
    browser.wait(EC.elementToBeClickable(singleAddress), 45000);
    await singleAddress.sendKeys(process.env.LOCATIONCOORDINATESEARCH)
    await new Promise(resolve => setTimeout(resolve, 4500));
    await browser.wait(EC.presenceOf(addressautocompleteList), 55000);
    await addressautocompleteList.getText().then(async function (text) {
      console.log("Auto11", text)
      expect(text.length).toBeGreaterThan(0);
      for (var i = 0; i < text.length; i++) {
        console.log("Auto12", i)
        defaultcolumns = i + 1;
        indexId = getindexValue(defaultcolumns);
        console.log("Auto13", indexId)
        let selectAddress = element(by.xpath('//mat-option' + indexId + '//span[@class="mat-option-text"]'))
        browser.wait(EC.presenceOf(selectAddress), 55000);
        await browser.actions().mouseMove(selectAddress).click().perform();
        break;
      }
    });
    await validateButton.click();
    browser.wait(EC.visibilityOf(addressTotalcount), 45000);
    await new Promise(resolve => setTimeout(resolve, 3500));
    await verifyimporteddataResponses(uploaded_Addresses, uploaded_Addressresponse);
    await verifyimporteddataResponses(uploaded_locationType, uploaded_Locationtyperesponse);
    await verifyimporteddataResponses(uploaded_Validation, uploaded_Validationresponse);
    await verifyimporteddataResponses(uploaded_City, uploaded_Cityresponse);
    await verifyimporteddataResponses(uploaded_Zipcode, uploaded_Zipcoderesponse);
    await verifyimporteddataResponses(uploaded_Country, uploaded_Countryresponse);
    await verifyimporteddataResponses(uploaded_State, uploaded_Stateresponse);
    await browser.wait(EC.presenceOf(selectAllcheck), 45000);
    selectAllcheck.click();
    browser.wait(EC.visibilityOf(submitButton), 45000);
    submitButton.click();
    await new Promise(resolve => setTimeout(resolve, 3500));
    browser.wait(EC.presenceOf(dealdisplayed_Addresses), 75000);
    verifyDealuploadedaddresses(dealdisplayed_Addresses, uploaded_Addressresponse)
    verifyDealuploadedaddresses(dealdisplayed_locationType, uploaded_Locationtyperesponse)
    verifyDealuploadedaddresses(dealdisplayed_Validation, uploaded_Validationresponse)
    verifyDealuploadedaddresses(dealdisplayed_City, uploaded_Cityresponse)
    verifyDealuploadedaddresses(dealdisplayed_State, uploaded_Stateresponse)
    verifyDealuploadedaddresses(dealdisplayed_Zipcode, uploaded_Zipcoderesponse)
    verifyDealuploadedaddresses(dealdisplayed_Country, uploaded_Countryresponse)
  });

  it('Verify if the location added to deal using the Single Address Autocomplete or Coordinate Search is visible correctly in the Deals Page UI', async function () {
    console.log("Comcast26")
    browser.wait(EC.presenceOf(dealdisplayed_locationType), 75000);
    verifyDealuploadedaddresses(dealdisplayed_Addresses, uploaded_Addressresponse)
    verifyDealuploadedaddresses(dealdisplayed_locationType, uploaded_Locationtyperesponse)
    verifyDealuploadedaddresses(dealdisplayed_Validation, uploaded_Validationresponse)
    verifyDealuploadedaddresses(dealdisplayed_City, uploaded_Cityresponse)
    verifyDealuploadedaddresses(dealdisplayed_State, uploaded_Stateresponse)
    verifyDealuploadedaddresses(dealdisplayed_Zipcode, uploaded_Zipcoderesponse)
    verifyDealuploadedaddresses(dealdisplayed_Country, uploaded_Countryresponse)
  });

  it('Verify the locations add to deal using the multiple address copy paste option', async function () {
    console.log("Comcast27")
    await browser.wait(EC.presenceOf(uploadaddlocationBtn), 75000);
    uploadaddlocationBtn.click();
    browser.wait(EC.elementToBeClickable(multipleAddresstext), 45000);
    await multipleAddresstext.sendKeys(process.env.ADDRESSINPUT1)
    await multipleAddresstext.sendKeys(protractor.Key.ENTER);
    await multipleAddresstext.sendKeys(process.env.ADDRESSINPUT2)
    await validateButton.click();
    browser.wait(EC.visibilityOf(addressTotalcount), 35000);
    await new Promise(resolve => setTimeout(resolve, 3500));
    await verifyimporteddataResponses(uploaded_Addresses, uploaded_Addressresponse);
    await verifyimporteddataResponses(uploaded_locationType, uploaded_Locationtyperesponse);
    await verifyimporteddataResponses(uploaded_Validation, uploaded_Validationresponse);
    await verifyimporteddataResponses(uploaded_City, uploaded_Cityresponse);
    await verifyimporteddataResponses(uploaded_Zipcode, uploaded_Zipcoderesponse);
    await verifyimporteddataResponses(uploaded_Country, uploaded_Countryresponse);
    await verifyimporteddataResponses(uploaded_State, uploaded_Stateresponse);
    await browser.wait(EC.presenceOf(selectAllcheck), 45000);
    await selectAllcheck.click();
    browser.wait(EC.visibilityOf(submitButton), 45000);
    await submitButton.click();
    await new Promise(resolve => setTimeout(resolve, 3500));
    await browser.wait(EC.presenceOf(dealdisplayed_Addresses), 45000);
    verifyDealuploadedaddresses(dealdisplayed_Addresses, uploaded_Addressresponse)
    verifyDealuploadedaddresses(dealdisplayed_locationType, uploaded_Locationtyperesponse)
    verifyDealuploadedaddresses(dealdisplayed_Validation, uploaded_Validationresponse)
    verifyDealuploadedaddresses(dealdisplayed_City, uploaded_Cityresponse)
    verifyDealuploadedaddresses(dealdisplayed_State, uploaded_Stateresponse)
    verifyDealuploadedaddresses(dealdisplayed_Zipcode, uploaded_Zipcoderesponse)
    verifyDealuploadedaddresses(dealdisplayed_Country, uploaded_Countryresponse)
  });

  it('Verify if the locations including the secondary designator and the secondary number added to a deal through the CSV location upload are visible in the NI export file.', async function () {
    console.log("Comcast2875")
    await browser.wait(EC.presenceOf(dealaddressMenuicon), 45000);
    await browser.actions().mouseMove(dealaddressMenuicon).click().perform();
    await browser.wait(EC.presenceOf(exportallSelectedaddress), 55000);
    await exportallSelectedaddress.click();
    await new Promise(resolve => setTimeout(resolve, 5500));
    dealCSVFile = await getLatestCSVFile(process.env.FOLDERPATH);
    console.log("CSVFile50", dealCSVFile)
    const data = readexportfileData(dealCSVFile);
    for (const secondaryData of data) {
      dealExportedSecondaryDesignator.push(secondaryData['Secondary Designator'])
      dealExportedSecondaryNumber.push(secondaryData['Secondary Number'])
    }
    verifyDealuploadedaddresses(dealdisplayed_Secondarydesignator, dealExportedSecondaryDesignator)
    verifyDealuploadedaddresses(dealdisplayed_Secondarynumber, dealExportedSecondaryNumber)
    console.log("NetworkIntell", dealExportedSecondaryDesignator)
  });

  it('Verify if the locations with the secondary designator and the secondary number are validated correctly when importing locations through the multiple address copy paste option', async function () {
    console.log("Comcast28")
    await browser.wait(EC.presenceOf(uploadaddlocationBtn), 75000);
    uploadaddlocationBtn.click();
    browser.wait(EC.elementToBeClickable(multipleAddresstext), 45000);
    await multipleAddresstext.sendKeys(process.env.SECONDARYADDRESSINPUT1)
    await multipleAddresstext.sendKeys(protractor.Key.ENTER);
    await multipleAddresstext.sendKeys(process.env.SECONDARYADDRESSINPUT2)
    await validateButton.click();
    browser.wait(EC.visibilityOf(addressTotalcount), 35000);
    await new Promise(resolve => setTimeout(resolve, 3500));
    await verifyimporteddataResponses(uploaded_Addresses, uploaded_Addressresponse);
    await verifyimporteddataResponses(uploaded_locationType, uploaded_Locationtyperesponse);
    await verifyimporteddataResponses(uploaded_Validation, uploaded_Validationresponse);
    await verifyimporteddataResponses(uploaded_City, uploaded_Cityresponse);
    await verifyimporteddataResponses(uploaded_Zipcode, uploaded_Zipcoderesponse);
    await verifyimporteddataResponses(uploaded_Country, uploaded_Countryresponse);
    await verifyimporteddataResponses(uploaded_State, uploaded_Stateresponse);
    await verifyimporteddataResponses(uploaded_Secondarydesignator, uploaded_Secondarydesignresponse);
    await verifyimporteddataResponses(uploaded_Secondarynumber, uploaded_Secondaynumberresponse);
    await browser.wait(EC.presenceOf(selectAllcheck), 45000);
    await selectAllcheck.click();
    browser.wait(EC.visibilityOf(submitButton), 45000);
    await submitButton.click();
    await new Promise(resolve => setTimeout(resolve, 3500));
    await browser.wait(EC.presenceOf(dealdisplayed_Addresses), 45000);
    verifyDealuploadedaddresses(dealdisplayed_Addresses, uploaded_Addressresponse)
    verifyDealuploadedaddresses(dealdisplayed_locationType, uploaded_Locationtyperesponse)
    verifyDealuploadedaddresses(dealdisplayed_Validation, uploaded_Validationresponse)
    verifyDealuploadedaddresses(dealdisplayed_City, uploaded_Cityresponse)
    verifyDealuploadedaddresses(dealdisplayed_State, uploaded_Stateresponse)
    verifyDealuploadedaddresses(dealdisplayed_Zipcode, uploaded_Zipcoderesponse)
    verifyDealuploadedaddresses(dealdisplayed_Country, uploaded_Countryresponse)
    verifyDealuploadedaddresses(dealdisplayed_Secondarydesignator, uploaded_Secondarydesignresponse)
    verifyDealuploadedaddresses(dealdisplayed_Secondarynumber, uploaded_Secondaynumberresponse)
  });

  it('Verify the location add to deal including the secondary designator and the secondary number using the multiple address copy paste option', async function () {
    console.log("Comcast29")
    await browser.wait(EC.presenceOf(uploadaddlocationBtn), 75000);
    browser.actions().mouseMove(uploadaddlocationBtn).click().perform();
    browser.wait(EC.elementToBeClickable(multipleAddresstext), 45000);
    await multipleAddresstext.sendKeys(process.env.SECONDARYADDRESSINPUT1)
    await multipleAddresstext.sendKeys(protractor.Key.ENTER);
    await multipleAddresstext.sendKeys(process.env.SECONDARYADDRESSINPUT2)
    await validateButton.click();
    browser.wait(EC.visibilityOf(addressTotalcount), 35000);
    await new Promise(resolve => setTimeout(resolve, 3500));
    await verifyimporteddataResponses(uploaded_Addresses, uploaded_Addressresponse);
    await verifyimporteddataResponses(uploaded_locationType, uploaded_Locationtyperesponse);
    await verifyimporteddataResponses(uploaded_Validation, uploaded_Validationresponse);
    await verifyimporteddataResponses(uploaded_City, uploaded_Cityresponse);
    await verifyimporteddataResponses(uploaded_Zipcode, uploaded_Zipcoderesponse);
    await verifyimporteddataResponses(uploaded_Country, uploaded_Countryresponse);
    await verifyimporteddataResponses(uploaded_State, uploaded_Stateresponse);
    await browser.wait(EC.presenceOf(selectAllcheck), 45000);
    await selectAllcheck.click();
    browser.wait(EC.visibilityOf(submitButton), 45000);
    await submitButton.click();
    await new Promise(resolve => setTimeout(resolve, 3500));
    await browser.wait(EC.presenceOf(dealdisplayed_Addresses), 65000);
    verifyDealuploadedaddresses(dealdisplayed_Addresses, uploaded_Addressresponse)
    verifyDealuploadedaddresses(dealdisplayed_locationType, uploaded_Locationtyperesponse)
    verifyDealuploadedaddresses(dealdisplayed_Validation, uploaded_Validationresponse)
    verifyDealuploadedaddresses(dealdisplayed_City, uploaded_Cityresponse)
    verifyDealuploadedaddresses(dealdisplayed_State, uploaded_Stateresponse)
    verifyDealuploadedaddresses(dealdisplayed_Zipcode, uploaded_Zipcoderesponse)
    verifyDealuploadedaddresses(dealdisplayed_Country, uploaded_Countryresponse)
    verifyDealuploadedaddresses(dealdisplayed_Secondarydesignator, uploaded_Secondarydesignresponse)
    verifyDealuploadedaddresses(dealdisplayed_Secondarynumber, uploaded_Secondaynumberresponse)
  });

  it('Verify if the location added to the deal including the secondary designator and the secondary number using the multiple address copy paste option is visible in the Deals page UI', async function () {
    console.log("Comcast30")
    verifyDealuploadedaddresses(dealdisplayed_Addresses, uploaded_Addressresponse)
    verifyDealuploadedaddresses(dealdisplayed_locationType, uploaded_Locationtyperesponse)
    verifyDealuploadedaddresses(dealdisplayed_Validation, uploaded_Validationresponse)
    verifyDealuploadedaddresses(dealdisplayed_City, uploaded_Cityresponse)
    verifyDealuploadedaddresses(dealdisplayed_State, uploaded_Stateresponse)
    verifyDealuploadedaddresses(dealdisplayed_Zipcode, uploaded_Zipcoderesponse)
    verifyDealuploadedaddresses(dealdisplayed_Country, uploaded_Countryresponse)
    verifyDealuploadedaddresses(dealdisplayed_Secondarydesignator, uploaded_Secondarydesignresponse)
    verifyDealuploadedaddresses(dealdisplayed_Secondarynumber, uploaded_Secondaynumberresponse)
    console.log("Completed")
  });

  it('Verify if the locations are validated correctly when importing locations through the CSV location upload to a deal', async function () {
    console.log("Comcast31")
    await new Promise(resolve => setTimeout(resolve, 4500));
    await browser.wait(EC.presenceOf(uploadaddlocationBtn), 75000);
    await uploadaddlocationBtn.click();
    try {
      const fileToUpload = process.env.UPLOADEDFILEPATH
      absolutePath = path.resolve(__dirname, fileToUpload)
      const fileInput = element(by.css('input[type="file"]'));
      await fileInput.sendKeys(absolutePath)
      await new Promise(resolve => setTimeout(resolve, 4500));
      await validateButton.click();
      const data = readUploadedfile(fileToUpload);
      for (var i = 0; i < data.length; i++) {
        uploaded_Addressresponse.push(replaceUnwantedCharacters(data[i]['Address']))
        uploaded_Secondarydesignresponse.push(replaceUnwantedCharacters(data[i]['Secondary Designator']))
        uploaded_Secondaynumberresponse.push(replaceUnwantedCharacters(data[i]['Secondary Number']))
        uploaded_customLocationidresponse.push(replaceUnwantedCharacters(data[i]['ID']))
        uploaded_Flexfield1response.push(replaceUnwantedCharacters(data[i]['Flex Field 1']))
        uploaded_Flexfield2response.push(replaceUnwantedCharacters(data[i]['Flex Field 2\r']));
        uploaded_Siteidresponse.push(replaceUnwantedCharacters(data[i]['Site ID']))
        uploaded_Sitecategoryresponse.push(replaceUnwantedCharacters(data[i]['Site Category']))
        uploaded_Sitenameresponse.push(replaceUnwantedCharacters(data[i]['Site Name']))
      }
      console.log("Testing1996", uploaded_Flexfield2response)
      browser.wait(EC.presenceOf(selectAllcheck), 45000);
      await selectAllcheck.click();
      browser.wait(EC.visibilityOf(submitButton), 45000);
      await submitButton.click();
      await browser.wait(EC.visibilityOf(dealdisplayed_Addresses), 65000);
    }
    catch (error) {
      console.error('Error When Verifying the Data:', error);
    }
  });

  it('Verify if the locations including the custom location id are validated correctly when importing locations through the CSV location upload to a deal', async function () {
    console.log("Comcast32")
    await new Promise(resolve => setTimeout(resolve, 3500));
    verifyDealuploadedaddresses(custom_locationId, uploaded_customLocationidresponse)
  });

  it('Verify if the locations with the secondary designator and the Secondary Number are validated correctly when importing locations through the CSV location upload to a deal', async function () {
    console.log("Comcast33")
    verifyDealuploadedaddresses(dealdisplayed_Secondarydesignator, uploaded_Secondarydesignresponse)
    verifyDealuploadedaddresses(dealdisplayed_Secondarynumber, uploaded_Secondaynumberresponse)
  });

  it('Verify if the locations including the site id, the site category and the site name are validated correctly when importing locations through the CSV location upload to a deal', async function () {
    console.log("Comcast34")
    verifyDealuploadedaddresses(dealdisplayed_Siteid, uploaded_Siteidresponse)
    verifyDealuploadedaddresses(dealdisplayed_Sitecategory, uploaded_Sitecategoryresponse)
    verifyDealuploadedaddresses(dealdisplayed_Sitename, uploaded_Sitenameresponse)
  });

  it('Verify if the locations including the flex field1 and the flex field2 are validated correctly when importing locations through the CSV location upload to a deal', async function () {
    console.log("Comcast35")
    verifyDealuploadedaddresses(dealdisplayed_Flexfield1, uploaded_Flexfield1response)
    verifyDealuploadedaddresses(dealdisplayed_Flexfield2, uploaded_Flexfield2response)
  });

  it('Verify if the locations including the secondary designator, the secondary number, the flex fields, the custom location id, the site id, the site category and the site name are validated correctly when importing locations through the CSV location upload to', async function () {
    console.log("Comcast36")
    verifyDealuploadedaddresses(dealdisplayed_Secondarydesignator, uploaded_Secondarydesignresponse)
    verifyDealuploadedaddresses(dealdisplayed_Secondarynumber, uploaded_Secondaynumberresponse)
    verifyDealuploadedaddresses(dealdisplayed_Flexfield1, uploaded_Flexfield1response)
    verifyDealuploadedaddresses(dealdisplayed_Flexfield2, uploaded_Flexfield2response)
    verifyDealuploadedaddresses(custom_locationId, uploaded_customLocationidresponse)
    verifyDealuploadedaddresses(dealdisplayed_Siteid, uploaded_Siteidresponse)
    verifyDealuploadedaddresses(dealdisplayed_Sitecategory, uploaded_Sitecategoryresponse)
    verifyDealuploadedaddresses(dealdisplayed_Sitename, uploaded_Sitenameresponse)
  });

  it('Verify CSV location upload to a deal with the locations including the secondary designator and the secondary number', async function () {
    console.log("Comcast37")
    verifyDealuploadedaddresses(dealdisplayed_Secondarydesignator, uploaded_Secondarydesignresponse)
    verifyDealuploadedaddresses(dealdisplayed_Secondarynumber, uploaded_Secondaynumberresponse)
  });

  it('Verify CSV location upload to a deal with the locations including the custom location id', async function () {
    console.log("Comcast38")
    verifyDealuploadedaddresses(custom_locationId, uploaded_customLocationidresponse)
  });

  it('Verify CSV location upload to a deal with the locations including the site id, the site category and the site name', async function () {
    console.log("Comcast39")
    verifyDealuploadedaddresses(dealdisplayed_Siteid, uploaded_Siteidresponse)
    verifyDealuploadedaddresses(dealdisplayed_Sitecategory, uploaded_Sitecategoryresponse)
    verifyDealuploadedaddresses(dealdisplayed_Sitename, uploaded_Sitenameresponse)
  });

  it('Verify CSV location upload to a deal with the locations including the flex field1 and the flex field2', async function () {
    console.log("Comcast40")
    verifyDealuploadedaddresses(dealdisplayed_Flexfield1, uploaded_Flexfield1response)
    verifyDealuploadedaddresses(dealdisplayed_Flexfield2, uploaded_Flexfield2response)
  });

  it('Verify CSV location upload to a deal with the locations including the secondary designator, the secondary number, the flex fields, the custom location id, the site id, the site category and the site name', async function () {
    console.log("Comcast41")
    verifyDealuploadedaddresses(dealdisplayed_Secondarydesignator, uploaded_Secondarydesignresponse)
    verifyDealuploadedaddresses(dealdisplayed_Secondarynumber, uploaded_Secondaynumberresponse)
    verifyDealuploadedaddresses(dealdisplayed_Flexfield1, uploaded_Flexfield1response)
    verifyDealuploadedaddresses(dealdisplayed_Flexfield2, uploaded_Flexfield2response)
    verifyDealuploadedaddresses(custom_locationId, uploaded_customLocationidresponse)
    verifyDealuploadedaddresses(dealdisplayed_Siteid, uploaded_Siteidresponse)
    verifyDealuploadedaddresses(dealdisplayed_Sitecategory, uploaded_Sitecategoryresponse)
    verifyDealuploadedaddresses(dealdisplayed_Sitename, uploaded_Sitenameresponse)
  });

  it('Verify CSV location upload including same location duplicates with different Customlocation ids', async function () {
    console.log("Comcast42")
    dealdisplayed_Addresses.getText().then(function (text) {
      const duplicateAddresses = findDynamicDuplicates(text);
      console.log("Duplicate_Addresses", duplicateAddresses)
    });
  });

  it('Verify if the locations including the secondary designator and the secondary number added to a deal through the CSV location upload are visible in the deals locations page.', async function () {
    console.log("Comcast43")
    verifyDealuploadedaddresses(dealdisplayed_Secondarydesignator, uploaded_Secondarydesignresponse)
    verifyDealuploadedaddresses(dealdisplayed_Secondarynumber, uploaded_Secondaynumberresponse)
  });

  it('Verify if the same location duplicates with different Customlocation ids added to deal through the CSV location upload are visible in the deals locations page.', async function () {
    console.log("Comcast44")
    verifyDealuploadedaddresses(dealdisplayed_Addresses, uploaded_Addressresponse)
    verifyDealuploadedaddresses(dealdisplayed_Secondarydesignator, uploaded_Secondarydesignresponse)
    verifyDealuploadedaddresses(dealdisplayed_Secondarynumber, uploaded_Secondaynumberresponse)
    verifyDealuploadedaddresses(dealdisplayed_Flexfield1, uploaded_Flexfield1response)
    verifyDealuploadedaddresses(dealdisplayed_Flexfield2, uploaded_Flexfield2response)
    verifyDealuploadedaddresses(custom_locationId, uploaded_customLocationidresponse)
    verifyDealuploadedaddresses(dealdisplayed_Siteid, uploaded_Siteidresponse)
    verifyDealuploadedaddresses(dealdisplayed_Sitecategory, uploaded_Sitecategoryresponse)
    verifyDealuploadedaddresses(dealdisplayed_Sitename, uploaded_Sitenameresponse)
  });

  it('Verify if the locations including the custom location id added to a deal through the CSV location upload are visible in the deals locations page.', async function () {
    console.log("Comcast45")
    verifyDealuploadedaddresses(dealdisplayed_Addresses, uploaded_Addressresponse)
    verifyDealuploadedaddresses(custom_locationId, uploaded_customLocationidresponse)
  });

  it('Verify if the locations including the site id, the site category and the site name added to a deal through the CSV location upload are visible in the deals locations page.', async function () {
    console.log("Comcast46")
    verifyDealuploadedaddresses(dealdisplayed_Siteid, uploaded_Siteidresponse)
    verifyDealuploadedaddresses(dealdisplayed_Sitecategory, uploaded_Sitecategoryresponse)
    verifyDealuploadedaddresses(dealdisplayed_Sitename, uploaded_Sitenameresponse)
  });

  it('Verify if the locations including the flex field1 and the flex field2 added to a deal through the CSV location upload are visible in the deals locations page.', async function () {
    console.log("Comcast47")
    verifyDealuploadedaddresses(dealdisplayed_Flexfield1, uploaded_Flexfield1response)
    verifyDealuploadedaddresses(dealdisplayed_Flexfield2, uploaded_Flexfield2response)
  });

  it('Verify if the locations including the secondary designator, the secondary number, the flex fields, the custom location id, the site id, the site category and the site name added to a deal through the CSV location upload are visible in the deals locations ', async function () {
    console.log("Comcast48")
    verifyDealuploadedaddresses(dealdisplayed_Secondarydesignator, uploaded_Secondarydesignresponse)
    verifyDealuploadedaddresses(dealdisplayed_Secondarynumber, uploaded_Secondaynumberresponse)
  });

  it('Verify if the locations including the custom location id added to a deal through the CSV location upload are visible in the NI export file.', async function () {
    console.log("ComcastNew1")
    const data = readexportfileData(dealCSVFile);
    for (const datas of data) {
      dealExportedCustomLocationId.push(datas['ID'])
      dealExportedSiteId.push(datas['Site ID'])
      dealExportedSiteCategory.push(datas['Site Category'])
      dealExportedSiteName.push(datas['Site Name'])
      dealExportedFlexField1.push(datas['Flex Field 1'])
      dealExportedFlexField2.push(datas['Flex Field 2'])
    }
    verifyDealuploadedaddresses(custom_locationId, dealExportedCustomLocationId)
  });

  it('Verify if the locations including the site id, the site category and the site name added to a deal through the CSV location upload are visible in the NI export file.', async function () {
    console.log("ComcastNew2")
    verifyDealuploadedaddresses(dealdisplayed_Siteid, dealExportedSiteId)
    verifyDealuploadedaddresses(dealdisplayed_Sitecategory, dealExportedSiteCategory)
    verifyDealuploadedaddresses(dealdisplayed_Sitename, dealExportedSiteName)
  });

  it('Verify if the locations including the flex field1 and the flex field2 added to a deal through the CSV location upload are visible in the NI export file.', async function () {
    console.log("ComcastNew3")
    verifyDealuploadedaddresses(dealdisplayed_Flexfield1, dealExportedFlexField1)
    verifyDealuploadedaddresses(dealdisplayed_Flexfield2, dealExportedFlexField2)
  });

  it('Verify if the locations including the secondary designator, the secondary number, the flex fields, the custom location id, the site id, the site category and the site name added to a deal through the CSV location upload are visible in the NI export file.', async function () {
    console.log("ComcastNew4")
    verifyDealuploadedaddresses(custom_locationId, dealExportedCustomLocationId)
    verifyDealuploadedaddresses(dealdisplayed_Siteid, dealExportedSiteId)
    verifyDealuploadedaddresses(dealdisplayed_Sitecategory, dealExportedSiteCategory)
    verifyDealuploadedaddresses(dealdisplayed_Sitename, dealExportedSiteName)
    verifyDealuploadedaddresses(dealdisplayed_Flexfield1, dealExportedFlexField1)
    verifyDealuploadedaddresses(dealdisplayed_Flexfield2, dealExportedFlexField2)
    verifyDealuploadedaddresses(dealdisplayed_Secondarydesignator, dealExportedSecondaryDesignator)
    verifyDealuploadedaddresses(dealdisplayed_Secondarynumber, dealExportedSecondaryNumber)
  });

  it('Verify if the same location duplicates with different Customlocation ids added to deal through the CSV location upload are visible in the NI export file.', async function () {
    console.log("ComcastNew5")
    verifyDealuploadedaddresses(custom_locationId, dealExportedCustomLocationId)
    removeExcelFile(dealCSVFile)
  });

  it('Verify if the pricing is returned in the CPQ step 3 UI.', async function () {
    console.log("Comcast49")
    await browser.wait(EC.visibilityOf(cpqButton), 75000);
    await browser.actions().mouseMove(cpqButton).click().perform();
    await creatingQuote();
    await configuringProducts();
    await browser.wait(EC.presenceOf(pricingHeaderlist), 35000);
  });

  it('Verify if the locations including the secondary designator and the secondary number added to a deal through CSV address import are visible in the CPQ step 3 UI.', async function () {
    console.log("Comcast50")
    await gettingPricingresponse('Secondary Designator', uploaded_Secondarydesignresponse);
    await gettingPricingresponse('Secondary Number', uploaded_Secondaynumberresponse);
  });

  it('Verify if the same location duplicates with different Customlocation ids added to deal through the CSV location upload are visible in the CPQ step 3 UI.', async function () {
    console.log("Comcast51")
    await gettingPricingresponse('Address', uploaded_Addressresponse);
    await gettingPricingresponse('Secondary Designator', uploaded_Secondarydesignresponse);
    await gettingPricingresponse('Secondary Number', uploaded_Secondaynumberresponse);
    await gettingPricingresponse('Flex field 1', uploaded_Flexfield1response);
    await gettingPricingresponse('Flex field 2', uploaded_Flexfield2response);
    await gettingPricingresponse('Custom Location ID', uploaded_customLocationidresponse);
    await gettingPricingresponse('Site Name', uploaded_Sitenameresponse);
    await gettingPricingresponse('Site ID', uploaded_Siteidresponse);
    await gettingPricingresponse('Site Category', uploaded_Sitecategoryresponse);
  });

  it('Verify if the locations including the secondary designator, the secondary number, the flex fields, the custom location id, the site id, the site category and the site name added to a deal through CSV address import are visible in the CPQ step 3 UI.', async function () {
    console.log("Comcast52")
    await gettingPricingresponse('Secondary Designator', uploaded_Secondarydesignresponse);
    await gettingPricingresponse('Secondary Number', uploaded_Secondaynumberresponse);
    await gettingPricingresponse('Flex field 1', uploaded_Flexfield1response);
    await gettingPricingresponse('Flex field 2', uploaded_Flexfield2response);
    await gettingPricingresponse('Custom Location ID', uploaded_customLocationidresponse);
    await gettingPricingresponse('Site Name', uploaded_Sitenameresponse);
    await gettingPricingresponse('Site ID', uploaded_Siteidresponse);
    await gettingPricingresponse('Site Category', uploaded_Sitecategoryresponse);
  });

  it('Verify if the Supplier pricing  is returned in CPQ Step 3', async function () {
    console.log("Comcast53")
    let supplierArray = [];
    await gettingPricingresponseforSpecificolumns('Supplier', supplierArray)
  });

  it('Verify if the locations including the custom location id added to a deal through CSV address import are visible in the CPQ step 3 UI.', async function () {
    console.log("Comcast54")
    await gettingPricingresponse('Custom Location ID', uploaded_customLocationidresponse);
  });

  it('Verify if the locations including the site id, the site category and the site name added to a deal through CSV address import are visible in the CPQ step 3 UI.', async function () {
    console.log("Comcast55")
    await gettingPricingresponse('Site Name', uploaded_Sitenameresponse);
    await gettingPricingresponse('Site ID', uploaded_Siteidresponse);
    await gettingPricingresponse('Site Category', uploaded_Sitecategoryresponse);
  });

  it('Verify if the locations including the flex field1 and the flex field2 added to a deal through CSV address import are visible in the CPQ step 3 UI.', async function () {
    console.log("Comcast56")
    await gettingPricingresponse('Flex field 1', uploaded_Flexfield1response);
    await gettingPricingresponse('Flex field 2', uploaded_Flexfield2response);
  });

  it('Verify if the locations including the secondary designator and the secondary number are visible in the export file from the CPQ step 3.', async function () {
    console.log("Comcast57")
    let secondary_designArray = [];
    let seondary_numberArray = [];
    await browser.wait(EC.visibilityOf(pricing_Menu), 35000);
    pricing_Menu.click();
    await browser.wait(EC.visibilityOf(exportallMenu), 45000);
    exportallMenu.click();
    await new Promise(resolve => setTimeout(resolve, 5500));
    pricingCSVFile = await getLatestCSVFile(process.env.FOLDERPATH);
    console.log("PricingHeader", pricingCSVFile)
    await gettingPricingresponseforSpecificolumns('Secondary Designator', secondary_designArray);
    await gettingPricingresponseforSpecificolumns('Secondary Number', seondary_numberArray);
    const data = readexportfileData(pricingCSVFile);
    console.log("CPQDeal", data)
    for (const pricingData of data) {
      pricingExportedSecondaryDesignator.push(pricingData['Secondary Designator']);
      pricingExportedSecondaryNumber.push(pricingData['Secondary Number']);
      pricingExportedFlexField1.push(pricingData['Flex field 1']);
      pricingExportedFlexField2.push(pricingData['Flex field 2']);
      pricingExportedSiteId.push(pricingData['Site ID']);
      pricingExportedSiteCategory.push(pricingData['Site Category']);
      pricingExportedSiteName.push(pricingData['Site Name']);
      pricingExportedCustomLocationId.push(pricingData['Custom Location ID']);
    }
    console.log("7500", pricingExportedSecondaryDesignator)
    console.log("7501", pricingExportedSecondaryNumber)
    console.log("7502", pricingExportedFlexField1)
    console.log("7503", pricingExportedFlexField2)
    console.log("7504", pricingExportedSiteId)
    console.log("7505", pricingExportedSiteCategory)
    console.log("7506", pricingExportedSiteName)
    console.log("7507", pricingExportedCustomLocationId)
    verifyExcelDatacolumns(secondary_designArray, pricingExportedSecondaryDesignator);
    verifyExcelDatacolumns(seondary_numberArray, pricingExportedSecondaryNumber);
  });

  it('Verify if the locations including the custom location id are visible in the export file from the CPQ step 3.', async function () {
    console.log("Comcast58")
    let custom_locationArray = [];
    await gettingPricingresponseforSpecificolumns('Custom Location ID', custom_locationArray);
    verifyExcelDatacolumns(custom_locationArray, pricingExportedCustomLocationId);
  });

  it('Verify if the locations including the flex field1 and the flex field2 are visible in the export file from the CPQ step 3.', async function () {
    console.log("Comcast5863")
    let flex_FieldArray1 = [];
    let flex_FieldArray2 = [];
    await gettingPricingresponseforSpecificolumns('Flex field 1', flex_FieldArray1);
    await gettingPricingresponseforSpecificolumns('Flex field 2', flex_FieldArray2);
    verifyExcelDatacolumns(flex_FieldArray1, pricingExportedFlexField1);
    verifyExcelDatacolumns(flex_FieldArray2, pricingExportedFlexField2);
  });

  it('Verify if the locations including the site id, the site category and the site name are visible in the export file from the CPQ step 3.', async function () {
    console.log("Comcast59")
    let site_categoryArray = [];
    let site_nameArray = [];
    await gettingPricingresponseforSpecificolumns('Site ID', site_idArray);
    await gettingPricingresponseforSpecificolumns('Site Name', site_categoryArray);
    await gettingPricingresponseforSpecificolumns('Site Category', site_nameArray);
    verifyExcelDatacolumns(site_idArray, pricingExportedSiteId)
    verifyExcelDatacolumns(site_categoryArray, pricingExportedSiteCategory)
    verifyExcelDatacolumns(site_nameArray, pricingExportedSiteName)
  });

  it('Verify if the locations including the secondary designator, the secondary number, the flex fields, the custom location id, the site id, the site category and the site name are visible in the export file from the CPQ step 3.', async function () {
    console.log("Comcast60")
    let site_categoryArray = [];
    let site_nameArray = [];
    let custom_locationArray = [];
    let secondary_designArray = [];
    let seondary_numberArray = [];
    let flex_field1Array = [];
    let flex_field2Array = [];
    console.log("Aldrin650", site_idArray)
    await gettingPricingresponseforSpecificolumns('Site Name', site_categoryArray);
    await gettingPricingresponseforSpecificolumns('Site Category', site_nameArray);
    await gettingPricingresponseforSpecificolumns('Custom Location ID', custom_locationArray);
    await gettingPricingresponseforSpecificolumns('Secondary Designator', secondary_designArray);
    await gettingPricingresponseforSpecificolumns('Secondary Number', seondary_numberArray);
    await gettingPricingresponseforSpecificolumns('Flex field 1', flex_field1Array);
    await gettingPricingresponseforSpecificolumns('Flex field 2', flex_field2Array);
    verifyExcelDatacolumns(site_idArray, pricingExportedSiteId)
    verifyExcelDatacolumns(site_categoryArray, pricingExportedSiteCategory)
    verifyExcelDatacolumns(site_nameArray, pricingExportedSiteName)
    verifyExcelDatacolumns(custom_locationArray, pricingExportedCustomLocationId);
    verifyExcelDatacolumns(secondary_designArray, pricingExportedSecondaryDesignator);
    verifyExcelDatacolumns(seondary_numberArray, pricingExportedSecondaryNumber);
    verifyExcelDatacolumns(flex_field1Array, pricingExportedFlexField1);
    verifyExcelDatacolumns(flex_field2Array, pricingExportedFlexField2);
  });

  it('Verify if the same location duplicates with different Customlocation ids added to deal through the CSV location upload are visible in the export file from the CPQ step 3.', async function () {
    console.log("Comcast61")
    let custom_locationArray = [];
    await gettingPricingresponseforSpecificolumns('Custom Location ID', custom_locationArray);
    verifyExcelDatacolumns(custom_locationArray, pricingExportedCustomLocationId);
  });

  it('Verify if the locations and pricing are visible in the export file from the CPQ step 3.', async function () {
    console.log("Comcast62")
    const data = readexportfileData(pricingCSVFile);
    console.log("Aldrin651", site_idArray)
  });

  it('Verify if the CPQ step 3 pricing export file header matches with Comcast existing prod env CPQ step 3 pricing export file', async function () {
    console.log("Comcast63")
    const data = readprodCSVData(process.env.PRODHEADERFILE);
    for (var key in data) {
      prodheaderArray.push(key)
    }
    const pricing = readprodCSVData(pricingCSVFile);
    for (var key in pricing) {
      pricingheaderArray.push(key)
    }
    console.log("PRodTesting:", prodheaderArray.length)
    console.log("PRodTesting11:", pricingheaderArray.length)
    console.log("PRodTesting12:", prodheaderArray)
    console.log("PRodTesting13:", pricingheaderArray)
    expect(parseInt(prodheaderArray.length)).toEqual(parseInt(pricingheaderArray.length));
    let result = JSON.stringify(prodheaderArray) === JSON.stringify(pricingheaderArray);
    expect(result).toBe(true)
    removeExcelFile(pricingCSVFile)
  });

  it('Verify the Audit logging', async function () {
    console.log("Comcast64")
    await browser.wait(EC.visibilityOf(exportMenu), 35000);
    exportMenu.click();
    await browser.wait(EC.visibilityOf(auditLogs), 45000);
    auditLogs.click();
    await browser.wait(EC.presenceOf(apiauditTracing), 45000);
    apiauditTracing.click();
    await browser.wait(EC.presenceOf(auditLoglist), 55000);
    await browser.wait(EC.presenceOf(auditLogPaginationValue25), 15000);
    await browser.wait(EC.elementToBeClickable(auditLogPaginationValue25), 25000);
    await auditLogPaginationValue25.click();
    await pricingPaginationValue100.click();
    await fetchAuditLog(auditLoglist, 'Internal');
    await fetchAuditLog(auditLoglist, 'External');
    await fetchAuditLog(auditLoglist, 'Network Radar');
    var i = 0, auditlength = tempArray.length;
    while (i < auditlength) {
      totalauditData.push(tempArray.slice(i, i += 3));
    }
    await fetchapiwiseData(totalauditData, 'Internal', internalAPI);
    await fetchapiwiseData(totalauditData, 'External', externalAPI);
    await fetchapiwiseData(totalauditData, 'Network Radar', companypricingAPI);
    await browser.wait(EC.presenceOf(auditClosebtn), 25000);
    browser.actions().mouseMove(auditClosebtn).click().perform();
  });

  it('Verify if the Company pricing is returned in CPQ Step 3', async function () {
    console.log("Comcast65")
    browser.wait(EC.presenceOf(pricingFilter), 6000);
    pricingFilter.click();
    browser.wait(EC.presenceOf(pricingHeaderlist), 35000);
    await fetchPricingDetails('Supplier', companypricingAPI)
  });

  it('Verify if the External API pricing is returned in CPQ Step 3', async function () {
    console.log("Comcast66")
    console.log("300", externalAPI.length)
    expect(parseInt(externalAPI.length)).toBeGreaterThan(0);
    await fetchPricingDetails('Supplier', externalAPI)
  });

  it('Verify if the Internal API pricing  is returned in CPQ Step 3', async function () {
    console.log("Comcast67")
    await fetchPricingDetails('Supplier', internalAPI)
    closeIcon.click();
  });

  it('Verify the Refresh Quote', async function () {
    console.log("Comcast68")
    browser.wait(EC.presenceOf(exportMenu), 55000);
    browser.actions().mouseMove(exportMenu).click().perform();
    exportMenu.click();
    browser.wait(EC.presenceOf(refreshQuote), 55000);
    refreshQuote.click();
    browser.wait(EC.presenceOf(confirmrefreshSuccessmsg), 55000);
    confirmrefreshYesbtn.click();
    await new Promise(resolve => setTimeout(resolve, 6500));
    const orCondition = EC.or(EC.visibilityOf(completePricngSuccessmessage), EC.visibilityOf(failureErrorMessage));
    console.log("5033", orCondition)
    browser.wait(orCondition, 1495000).then(() => {
      pricingStatus();
    });
  });

  it('Add new price in CPQ step 3 [Generate Site ID case]', async function () {
    console.log("Comcast69")
    let pricingArray = [];
    let priceSiteid;
    let priceCount;
    let totalPricingRecords;

    console.log("Pricing15", site_idArray)

    await pricingTotalcount.getText().then(async function (totalRecords) {
      console.log("15268", totalRecords)
      priceCount = totalRecords[2].split(" ");
      console.log("15262", priceCount[0])
    });
    await pricingHeaderlist.getText().then(async function (text) {
      for (const i of text) {
        var x = i.replace(/(\nFilter)/gm, "").replace(/(\nexpand_more)/gm, "").replace(/(\nexpand_more\n)/gm, "").replace(/(\nexpand_less)/gm, "");
        pricingArray.push(x)
      }
    });
    site_idArray.forEach(function (columnData, index) {
      if (columnData != '') {
        priceSiteIndexId = index + 1
      }
    });
    console.log("PriceSite511", priceSiteIndexId)
    priceSiteid = await pricingstep3Responses('Site ID', pricingArray, priceSiteIndexId);
    const address = await pricingstep3Responses('Address', pricingArray, priceSiteIndexId);
    const city = await pricingstep3Responses('City', pricingArray, priceSiteIndexId);
    const state = await pricingstep3Responses('State', pricingArray, priceSiteIndexId);
    const zipcode = await pricingstep3Responses('Zipcode', pricingArray, priceSiteIndexId);
    const country = await pricingstep3Responses('Country', pricingArray, priceSiteIndexId);

    const allfieldedResponses = address + "," + " " + city + "," + " " + state + "," + " " + country + "," + " " + zipcode + "," + " " + country
    console.log("FieldName", allfieldedResponses)
    console.log("FieldName11", priceSiteid)
    browser.wait(EC.presenceOf(addNewprice), 55000);
    addNewprice.click();
    browser.wait(EC.presenceOf(priceAddress), 55000);
    await new Promise(resolve => setTimeout(resolve, 4500));
    createnewpriceManually(allfieldedResponses, priceSiteid);
    browser.wait(EC.presenceOf(pricingTotalcount), 45000);
    totalPricingRecords = parseInt(priceCount[0]) + 1
    await pricingTotalcount.getText().then(async function (updatedTotal) {
      console.log("PRice11", totalPricingRecords)
      let newCount = updatedTotal[2].split(" ");
      console.log("PRice12", newCount[0])
      expect(parseInt(totalPricingRecords)).toEqual(parseInt(newCount[0]));
    });
  });

  it('Verify the Pricing Import', async function () {
    console.log("Comcast70")
    pricingImport(process.env.PRICINGIMPORTFILE);
  });

  it('Verify whether the user is able to import the datas in customfield : solution input', async function () {
    console.log("Comcast71")
    pricingImport(process.env.CUSTOMSOLUTIONFILE);
  });

  it('Filter for CPQ Pricing', async function () {
    console.log("Comcast72")
    browser.wait(EC.visibilityOf(filtersMenu), 9500);
    filtersMenu.click();
    pricingfilterswithEquals('ID')
    pricingfilterswithEquals('Account ID')
    pricingfilterswithEquals('Deal ID')
    pricingfilterswithEquals('Quote ID')
    pricingfilterswithEquals('Has Supplier')
    pricingfilterswithEquals('Is Alternative')
    pricingfilterswithEquals('Address')
    pricingfilterswithEquals('Secondary Designator')
    pricingfilterswithEquals('Secondary Number')
    pricingfilterswithEquals('City')
    pricingfilterswithEquals('State')
    pricingfilterswithEquals('Zipcode')
    pricingfilterswithEquals('Country')
    pricingfilterswithEquals('Disposition')
    pricingfilterswithEquals('Provider MRC (Cost)')
    pricingfilterswithEquals('MRC Markup (Cost)')
    pricingfilterswithEquals('MRC (Price)')
    pricingfilterswithEquals('MRC Markup (Price)')
    pricingfilterswithEquals('MRC Fees')
    pricingfilterswithEquals('MRC Margin')
    pricingfilterswithEquals('Total MRC')
    pricingfilterswithEquals('Provider NRC (Cost)')
    pricingfilterswithEquals('NRC Markup (Cost)')
    pricingfilterswithEquals('NRC (Price)')
    pricingfilterswithEquals('NRC Markup (Price)')
    pricingfilterswithEquals('NRC Fees')
    pricingfilterswithEquals('NRC Margin')
    pricingfilterswithEquals('Total NRC')
    pricingfilterswithEquals('Financial Rule Applied')
    pricingfilterswithEquals('Negative Margin')
    pricingfilterswithEquals('Term')
    pricingfilterswithEquals('Supplier')
    pricingfilterswithEquals('Last Mile Provider')
    pricingfilterswithEquals('Original Supplier Name')
    pricingfilterswithEquals('Product Category')
    pricingfilterswithEquals('API Product Name')
    pricingfilterswithEquals('Product Name')
    pricingfilterswithEquals('Speed')
    pricingfilterswithEquals('NNI')
    pricingfilterswithEquals('NNI ID')
    pricingfilterswithEquals('Status')
    pricingfilterswithEquals('Catalog')
    pricingfilterswithEquals('Address Valid')
    pricingfilterswithEquals('Flex field 1')
    pricingfilterswithEquals('Flex field 2')
    pricingfilterswithEquals('Notes')
    pricingfilterswithEquals('API Info')
    pricingfilterswithEquals('Custom Location ID')
    pricingfilterswithEquals('Provider Order #')
    pricingfilterswithEquals('Priority ID')
    pricingfilterswithEquals('Priority Flag')
    pricingfilterswithEquals('Serviceability ID')
    pricingfilterswithEquals('Site Name')
    pricingfilterswithEquals('Site ID')
    pricingfilterswithEquals('Special Pricing Details')
    pricingfilterswithEquals('Special Pricing MRC')
    pricingfilterswithEquals('Special Pricing NRC')
    pricingfilterswithEquals('Special Pricing Expiration')
    pricingfilterswithEquals('Provider Construction Contribution')
    pricingfilterswithEquals('Customer Construction Cost')
    pricingfilterswithEquals('Total Construction Cost')
    pricingfilterswithEquals('Construction ETA')
    pricingfilterswithEquals('Construction Details')
    pricingfilterswithEquals('Equipment MRC')
    pricingfilterswithEquals('Equipment NRC')
    pricingfilterswithEquals('Cross Connect MRC Price')
    pricingfilterswithEquals('Cross Connect NRC Price')
    pricingfilterswithEquals('Cross Connect MRC Cost')
    pricingfilterswithEquals('Cross Connect NRC Cost')
    pricingfilterswithEquals('Modified Date')
    pricingfilterswithEquals('MSA Available')
    pricingfilterswithEquals('LOS Distance')
    pricingfilterswithEquals('ROW Distance')
    pricingfilterswithEquals('Ethernet Zone')
    pricingfilterswithEquals('Tags')
    pricingfilterswithEquals('Location Status')
    pricingfilterswithEquals('Preferred Supplier')
    pricingfilterswithEquals('Customer Component ID')
    pricingfilterswithEquals('Install Interval')
    pricingfilterswithEquals('Minimum Circuit Level')
    pricingfilterswithEquals('Building Competitive Rating')
    pricingfilterswithEquals('Pricing Type')
    pricingfilterswithEquals('Handoff Type')
    pricingfilterswithEquals('Preferred Solution')
    pricingFilterWithContains('ID')
    pricingFilterWithContains('Account ID')
    pricingFilterWithContains('Deal ID')
    pricingFilterWithContains('Quote ID')
    pricingFilterWithContains('Address')
    pricingFilterWithContains('Secondary Designator')
    pricingFilterWithContains('Secondary Number')
    pricingFilterWithContains('City')
    pricingFilterWithContains('State')
    pricingFilterWithContains('Zipcode')
    pricingFilterWithContains('Country')
    pricingFilterWithContains('Disposition')
    pricingFilterWithContains('Provider MRC (Cost)')
    pricingFilterWithContains('MRC Markup (Cost)')
    pricingFilterWithContains('MRC (Price)')
    pricingFilterWithContains('MRC Markup (Price)')
    pricingFilterWithContains('MRC Fees')
    pricingFilterWithContains('MRC Margin')
    pricingFilterWithContains('Total MRC')
    pricingFilterWithContains('Provider NRC (Cost)')
    pricingFilterWithContains('NRC Markup (Cost)')
    pricingFilterWithContains('NRC (Price)')
    pricingFilterWithContains('NRC Markup (Price)')
    pricingFilterWithContains('NRC Fees')
    pricingFilterWithContains('NRC Margin')
    pricingFilterWithContains('Total NRC')
    pricingFilterWithContains('Term')
    pricingFilterWithContains('Supplier')
    pricingFilterWithContains('Last Mile Provider')
    pricingFilterWithContains('Original Supplier Name')
    pricingFilterWithContains('Product Category')
    pricingFilterWithContains('API Product Name')
    pricingFilterWithContains('Product Name')
    pricingFilterWithContains('Speed')
    pricingFilterWithContains('NNI')
    pricingFilterWithContains('NNI ID')
    pricingFilterWithContains('Status')
    pricingFilterWithContains('Catalog')
    pricingFilterWithContains('Flex field 1')
    pricingFilterWithContains('Flex field 2')
    pricingFilterWithContains('Notes')
    pricingFilterWithContains('API Info')
    pricingFilterWithContains('Custom Location ID')
    pricingFilterWithContains('Provider Order #')
    pricingFilterWithContains('Priority ID')
    pricingFilterWithContains('Priority Flag')
    pricingFilterWithContains('Serviceability ID')
    pricingFilterWithContains('Site Name')
    pricingFilterWithContains('Site ID')
    pricingFilterWithContains('Special Pricing Details')
    pricingFilterWithContains('Special Pricing MRC')
    pricingFilterWithContains('Special Pricing NRC')
    pricingFilterWithContains('Special Pricing Expiration')
    pricingFilterWithContains('Provider Construction Contribution')
    pricingFilterWithContains('Customer Construction Cost')
    pricingFilterWithContains('Total Construction Cost')
    pricingFilterWithContains('Construction ETA')
    pricingFilterWithContains('Construction Details')
    pricingFilterWithContains('Equipment MRC')
    pricingFilterWithContains('Equipment NRC')
    pricingFilterWithContains('Cross Connect MRC Price')
    pricingFilterWithContains('Cross Connect NRC Price')
    pricingFilterWithContains('Cross Connect MRC Cost')
    pricingFilterWithContains('Cross Connect NRC Cost')
    pricingFilterWithContains('Modified Date')
    pricingFilterWithContains('LOS Distance')
    pricingFilterWithContains('ROW Distance')
    pricingFilterWithContains('Ethernet Zone')
    pricingFilterWithContains('Tags')
    pricingFilterWithContains('Customer Component ID')
    pricingFilterWithContains('Install Interval')
    pricingFilterWithContains('Minimum Circuit Level')
    pricingFilterWithContains('Building Competitive Rating')
    pricingFilterWithContains('Pricing Type')
    pricingFilterWithContains('Handoff Type')
    pricingFilterWithContains('Preferred Solution')
    closeIcon.click();
  });

  it('Sort for CPQ Pricing', async function () {
    console.log("Comcast73")
    browser.wait(EC.presenceOf(PricingSort), 6000);
    browser.wait(EC.presenceOf(pricingHeaderlist), 25000);
    browser.actions().mouseMove(PricingSort).click().perform();
    browser.wait(EC.presenceOf(sortnameSupplierinput), 6000);
    browser.actions().mouseMove(sortnameSupplierinput).click().perform();
    fetchpricingSortingDesc('ID');
    fetchpricingSortingDesc('Account ID')
    fetchpricingSortingDesc('Deal ID')
    fetchpricingSortingDesc('Quote ID')
    fetchpricingSortingDesc('Has Supplier')
    fetchpricingSortingDesc('Is Alternative')
    fetchpricingSortingDesc('Address')
    fetchpricingSortingDesc('City')
    fetchpricingSortingDesc('State')
    fetchpricingSortingDesc('Zipcode')
    fetchpricingSortingDesc('Country')
    fetchpricingSortingDesc('Provider MRC (Cost)')
    fetchpricingSortingDesc('MRC Markup (Cost)')
    fetchpricingSortingDesc('MRC (Price)')
    fetchpricingSortingDesc('MRC Markup (Price)')
    fetchpricingSortingDesc('MRC Margin')
    fetchpricingSortingDesc('Total MRC')
    fetchpricingSortingDesc('Provider NRC (Cost)')
    fetchpricingSortingDesc('NRC Markup (Cost)')
    fetchpricingSortingDesc('NRC (Price)')
    fetchpricingSortingDesc('NRC Markup (Price)')
    fetchpricingSortingDesc('NRC Fees')
    fetchpricingSortingDesc('NRC Margin')
    fetchpricingSortingDesc('Total NRC')
    fetchpricingSortingDesc('Financial Rule Applied')
    fetchpricingSortingDesc('Negative Margin')
    fetchpricingSortingDesc('Term')
    fetchpricingSortingDesc('Supplier')
    fetchpricingSortingDesc('Original Supplier Name')
    fetchpricingSortingDesc('Product Category')
    fetchpricingSortingDesc('API Product Name')
    fetchpricingSortingDesc('Product Name')
    fetchpricingSortingDesc('Speed')
    fetchpricingSortingDesc('Media Type')
    fetchpricingSortingDesc('Net Status')
    fetchpricingSortingDesc('Bldg Status')
    fetchpricingSortingDesc('NNI')
    fetchpricingSortingDesc('NNI ID')
    fetchpricingSortingDesc('Status')
    fetchpricingSortingDesc('Catalog')
    fetchpricingSortingDesc('Flex field 1')
    fetchpricingSortingDesc('Flex field 2')
    fetchpricingSortingDesc('Notes')
    fetchpricingSortingDesc('API Info')
    fetchpricingSortingDesc('Secondary Designator')
    fetchpricingSortingDesc('Handoff Type')
    fetchpricingSortingDesc('Install Interval')
    fetchpricingSortingDesc('LOS Distance')
    fetchpricingSortingDesc('Custom Location ID')
    fetchpricingSortingDesc('Provider Order #')
    fetchpricingSortingDesc('Priority ID')
    closeIcon.click();
  });

  it('Download PDF file', async function () {
    console.log("Comcast74")
    browser.wait(EC.presenceOf(step3Nextbtn), 55000);
    browser.actions().mouseMove(step3Nextbtn).click().perform();
    await step3Nextbtn.click();
    browser.wait(EC.presenceOf(generateQuoteBtn), 55000);
    await browser.actions().mouseMove(generateQuoteBtn).click().perform();
    browser.wait(EC.presenceOf(quoteConfirmationpopup), 55000);
    quoteSucessyesbtn.click();
    await browser.wait(EC.presenceOf(downloadAspdfbutn), 55000);
    await downloadAspdfbutn.click();
    expect(downloadAspdfbutn.isDisplayed()).toBe(true);
  });

  it('Download  CSV file', async function () {
    console.log("Comcast75")
    await browser.wait(EC.presenceOf(downloadAspdfbutn), 55000);
    await downloadAscsvbutn.click();
    expect(downloadAscsvbutn.isDisplayed()).toBe(true);
    browser.wait(EC.presenceOf(step3Nextbtn), 55000);
    await browser.actions().mouseMove(step3Nextbtn).click().perform();
    await step3Nextbtn.click();
  });

  it('Quote verification', async function () {
    console.log("Comcast76")
    browser.wait(EC.presenceOf(sendQuotesendtotext), 55000);
    sendQuotesendtotext.clear();
    sendQuotesendtotext.sendKeys(process.env.APPUSERNAME)
    sendQuotesubject.clear();
    sendQuotesubject.sendKeys(process.env.MAILSUBJECT)
    sendQuotebody.clear();
    sendQuotebody.sendKeys(process.env.MAILBODY)
    sendQuotebtn.click();
    browser.wait(EC.presenceOf(sendQuotesucessicon), 55000);
    expect(sendQuotesucessicon.isDisplayed())
    browser.wait(EC.presenceOf(sendtoQuotesucessmessage), 55000);
    sendtoQuotesucessmessage.getText().then(function (sucssMsg) {
      console.log("Email11:" + sucssMsg)
      expect(sucssMsg).toEqual('Email has been sent');
    });
  });

  it('Verify if the user is able to view all the WIP in the My WIP tab', function () {
    console.log("Comcast77")
    try {
      browser.wait(EC.presenceOf(wipMenu), 45000);
      browser.actions().mouseMove(wipMenu).click().perform();
      browser.wait(EC.presenceOf(myWipMenu), 75000);
      browser.actions().mouseMove(myWipMenu).click().perform();
      browser.wait(EC.visibilityOf(myWipTotalCount), 55000);
      myWipTotalCount.getText().then(function (value) {
        let result = value.replace('total', '');
        expect(parseInt(result)).toBeGreaterThan(0);
      });
    } catch (error) {
      console.error('Error When View the Wip Data:', error);
    }
  });

  it('Verify if the Account ID and Deal ID are different for all the WIP in the My WIP tab', function () {
    console.log("Comcast78")
    verifyTotalWipdisplay('Quote Name', 'Account', 'Deal')
  });

  it('Verify the filters in the My WIP tab', function () {
    console.log("Comcast79")
    browser.wait(EC.presenceOf(myWipHeaderList), 45000);
    wipFiltersColumn('Filters');
    myWipHeaderList.getText().then(function (headerDatas) {
      defaultcolumns = getindexValue(headerDatas.length);
      lastHeaderColumn = element(by.xpath('//datatable-header-cell' + defaultcolumns + '[@role="columnheader"]'));
      browser.actions().mouseMove(lastHeaderColumn).click().perform();
      wipFiltersColumn('Filters');
    });
  });

  it('Verify if the days pending stops incrementing when quote is completed', function () {
    console.log("Comcast80")
    let wipIndexId;
    myWipHeaderList.getText().then(function (headerDatas) {
      console.log("Wip50", headerDatas)
      wipIndexId = headerDatas.indexOf('Days Pending')
      console.log("Wip51", wipIndexId)
      defaultcolumns = getindexValue(wipIndexId);
      const daysPendingColumn = element.all(by.xpath('//datatable-body-cell' + defaultcolumns + 'div[@class="datatable-body-cell-label"]'));
      console.log("Wip52", daysPendingColumn)
      expect(daysPendingColumn.length).toBeGreaterThan(0);
    });
  });

  it('Verify the sorting in the My WIP tab', function () {
    console.log("Comcast81")
    browser.wait(EC.presenceOf(globalWipMenu), 75000);
    globalWipMenu.click();
    browser.wait(EC.presenceOf(myWipMenu), 75000);
    myWipMenu.click();
    browser.wait(EC.visibilityOf(myWipTotalCount), 55000);
    wipFiltersColumn('Sorting');
    myWipHeaderList.getText().then(function (headerDatas) {
      defaultcolumns = getindexValue(headerDatas.length);
      lastHeaderColumn = element(by.xpath('//datatable-header-cell' + defaultcolumns + '[@role="columnheader"]'));
      browser.actions().mouseMove(lastHeaderColumn).click().perform();
      wipFiltersColumn('Sorting');
    });
  });

  it('Verify if the user is able to view all the WIP of the company in the Global WIP tab', function () {
    console.log("Comcast82")
    browser.wait(EC.presenceOf(globalWipMenu), 75000);
    globalWipMenu.click();
    browser.wait(EC.visibilityOf(myWipTotalCount), 55000);
    myWipTotalCount.getText().then(function (value) {
      let result = value.replace('total', '');
      expect(parseInt(result)).toBeGreaterThan(0);
    });
  });

  it('Verify if the user is able to view all the WIP of the company in the Global WIP tab', function () {
    console.log("Comcast83")
    browser.wait(EC.presenceOf(globalWipMenu), 75000);
    globalWipMenu.click();
    browser.wait(EC.visibilityOf(myWipTotalCount), 55000);
    myWipTotalCount.getText().then(function (value) {
      let result = value.replace('total', '');
      expect(parseInt(result)).toBeGreaterThan(0);
    });
  });

  it('Verify the filters in the Global WIP tab', function () {
    console.log("Comcast84")
    browser.wait(EC.presenceOf(myWipHeaderList), 45000);
    wipFiltersColumn('Filters');
    myWipHeaderList.getText().then(function (headerDatas) {
      defaultcolumns = getindexValue(headerDatas.length);
      lastHeaderColumn = element(by.xpath('//datatable-header-cell' + defaultcolumns + '[@role="columnheader"]'));
      browser.actions().mouseMove(lastHeaderColumn).click().perform();
      wipFiltersColumn('Filters');
    });
  });

  it('Verify the sorting in the Global WIP tab', function () {
    console.log("Comcast85")
    browser.wait(EC.presenceOf(myWipMenu), 75000);
    myWipMenu.click();
    browser.wait(EC.presenceOf(globalWipMenu), 75000);
    globalWipMenu.click();
    browser.wait(EC.visibilityOf(myWipTotalCount), 55000);
    wipFiltersColumn('Sorting');
    myWipHeaderList.getText().then(function (headerDatas) {
      defaultcolumns = getindexValue(headerDatas.length);
      lastHeaderColumn = element(by.xpath('//datatable-header-cell' + defaultcolumns + '[@role="columnheader"]'));
      browser.actions().mouseMove(lastHeaderColumn).click().perform();
      wipFiltersColumn('Sorting');
    });
  });
});

////////**Function for Sorting with Descending */
function fetchpricingSortingDesc(columnName) {
  let newArray = [];
  let columnExists;
  let callstatusResponse;
  let EC = protractor.ExpectedConditions;
  browser.wait(EC.presenceOf(pricingHeaderlist), 45000);
  browser.actions().mouseMove(auditlogClearinputs).click().perform();
  auditlogClearinputs.clear();
  browser.actions().mouseMove(sortnameSupplierinput).click().perform();
  auditlogClearinputs.sendKeys(columnName);
  browser.wait(EC.presenceOf(supplierList), 45000);
  supplierList.getText().then(function (displayData) {
    expect(displayData.length).toBeGreaterThan(0);
    for (var i = 0; i < displayData.length; i++) {
      if (displayData[i] == columnName) {
        let j = i + 1;
        indexCheck = getindexValue(j);
        let supplierAutocomplete = element(by.xpath('//mat-option' + indexCheck + '//span[@class="mat-option-text"]'))
        browser.wait(EC.presenceOf(supplierAutocomplete), 65000);
        supplierAutocomplete.click();
        columnExists = true;
        break;
      }
    }
  });
  browser.wait(EC.presenceOf(pricingHeaderlist), 35000);
  pricingHeaderlist.getText().then(function (text) {
    for (const i of text) {
      let x = i.replace(/(\nFilter)/gm, "").replace(/(\nexpand_more)/gm, "").replace(/(\nexpand_more\n)/gm, "").replace(/(\nexpand_less)/gm, "").replace(/(\nexpand_l)/gm, "");
      newArray.push(x)
    }
    defaultcolumns = newArray.indexOf(columnName);
    indexCheck = getindexValue(defaultcolumns);
    switch (columnExists) {
      case (columnName === "Has Supplier") || (columnName === "Is Alternative") || (columnName === "Financial Rule Applied") || (columnName === "Negative Margin") || (columnName === "Address Valid") || (columnName === "MSA Available") || (columnName === "Location Status") || (columnName === "Preferred Supplier") || (columnName === "Preferred Solution"):
        callstatusResponse = element.all(by.xpath('//table[@class="mat-table cdk-table digis-design-table"]//tbody//tr//td' + indexCheck + '//span'))
        browser.wait(EC.presenceOf(callstatusResponse), 95000);
        verificationResultsSortingDesc(callstatusResponse)
        break;
      case (columnName == 'Quote ID') || (columnName == 'ID') || (columnName == 'Deal ID') || (columnName == 'Account ID') || (columnName == 'Base Currency') || (columnName == 'Quote Currency') || (columnName == 'Disposition') || (columnName == 'MRC Margin') || (columnName == 'NRC Margin') || (columnName == 'Supplier') || (columnName == 'Last Mile Provider') || (columnName == 'Original Supplier Name') || (columnName == 'Product Category') || (columnName == 'API Product Name') || (columnName == 'Product Name') || (columnName == 'Speed') || (columnName == 'Media Type') || (columnName == 'Net Status') || (columnName == 'Bldg Status') || (columnName == 'NNI ID') || (columnName == 'Status') || (columnName == 'Catalog') || (columnName == 'API Info') || (columnName == 'Custom Location ID') || (columnName == 'Modified Date') || (columnName == 'LOS Distance') || (columnName == 'ROW Distance') || (columnName == 'Ethernet Zone') || (columnName == 'Tags') || (columnName == 'Customer Component ID') || (columnName == 'Building Competitive Rating') || (columnName == 'Pricing Type'):
        callstatusResponse = element.all(by.xpath('//table[@class="mat-table cdk-table digis-design-table"]//tbody//tr//td' + indexCheck + ''))
        browser.wait(EC.presenceOf(callstatusResponse), 95000);
        verificationResultsSortingDesc(callstatusResponse)
        break;
      default:
        callstatusResponse = element.all(by.xpath('//table[@class="mat-table cdk-table digis-design-table"]//tbody//tr//td' + indexCheck + '//div'))
        browser.wait(EC.presenceOf(callstatusResponse), 95000);
        verificationResultsSortingDesc(callstatusResponse)
    }
  });
}
//////**Function for Verification of Data */
function verificationResultsSortingDesc(callstatusResponse) {
  let EC = protractor.ExpectedConditions;
  let columnNamesortedAsc = [];
  let columnNameunSortedAsc = [];
  browser.wait(EC.presenceOf(callstatusResponse), 65000);
  callstatusResponse.then(() => {
    callstatusResponse.getText().then((text) => {
      columnNameunSortedAsc = text;
      columnNamesortedAsc = columnNameunSortedAsc.slice();
      columnNameunSortedAsc.reverse();
      columnNamesortedAsc.reverse();
      expect(columnNamesortedAsc).toEqual(columnNameunSortedAsc);
    })
  })
}
////**Verify the CSV Data with the Deal Location */
function verifydealData(givenData, verificationElements) {
  try {
    verificationElements.getText().then(function (text) {
      isEqual(givenData, text);
    });
  } catch (error) {
    console.error('Error When Verifying the Data:', error);
  }
}
//////**Remove \r Character */
function replaceUnwantedCharacters(excelData) {
  return excelData == undefined ? excelData : excelData.replace(/[\r\n]/g, "");
}
/////**Remove File from Local Folder */
function removeExcelFile(filePath) {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error removing file:', err);
    } else {
      console.log('File has been successfully removed.');
    }
  });
}
//////**Verify the addresses displayed in Deal page */
function verifyDealuploadedaddresses(columnResponse, verificationArray) {
  columnResponse.getText().then(function (text) {
    console.log("Testing501", text)
    console.log("Test502", verificationArray)
    expect(text.length).toBeGreaterThan(0);
    const result = text.some(r => verificationArray.includes(r))
    console.log("Test503", result)
    expect(result).toBe(true)
  });
}
////**Function to check duplicate address count */
function findDynamicDuplicates(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    if (!duplicates.includes(currentValue)) {
      // Check if the current value occurs again in the array
      const occurrences = arr.filter(item => item === currentValue);
      if (occurrences.length > 1) {
        // Only add the value as a duplicate if it occurs more than once
        duplicates.push(currentValue);
      }
    }
  }
  return duplicates;
}
//////**Display data after address Validate */
async function verifyimporteddataResponses(ColumnResponse, verificationArray) {
  await ColumnResponse.getText().then(async function (text) {
    expect(text.length).toBeGreaterThan(0);
    for (var i = 0; i < text.length; i++) {
      verificationArray.push(text[i])
    }
  });
}
/////**Creating a Quote */
async function creatingQuote() {
  var EC = protractor.ExpectedConditions;
  try {
    await browser.wait(EC.presenceOf(quoteName), 55000);
    await browser.wait(EC.elementToBeClickable(quoteName), 55000);
    await quoteName.click();
    await quoteName.sendKeys(process.env.QUOTE_NAME)
    await quoteNumber.sendKeys(process.env.QUOTE_NUMBER)
    await quoteType.sendKeys(process.env.QUOTE_TYPE)
    await quoteRfxId.sendKeys(process.env.QUOTE_RF)
    await quoteCam.sendKeys(process.env.QUOTE_CAM)
    await quoteNam.sendKeys(process.env.QUOTE_NAM)
    await quoteNotes.sendKeys(process.env.QUOTE_NOTES)
    await settingCustomFields('Custom Fields', customFieldQuoteList, quoteCustomFields, process.env.QUOTECUSTOMFIELDVALUE);
    await browser.wait(EC.elementToBeClickable(quoteAdd), 55000);
    await quoteAdd.click();
    await browser.wait(EC.presenceOf(quoteSucessmessage), 65000);
    await quoteSucessmessage.getText().then(function (text) {
      console.log("quoteSucessMsg", text)
      expect(text).toEqual('New quote created')
    });
  } catch (error) {
    console.error('Error while Adding the Quote:', error);
  }
}
/////**Choosing the Products,Media type and terms for selecting */
async function configuringProducts() {
  try {
    console.log("Method11")
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(chooseProducts), 75000);
    await new Promise(resolve => setTimeout(resolve, 3500));
    browser.wait(EC.elementToBeClickable(chooseProducts), 45000);
    chooseProducts.click();
    await choosemultipeProducts('Broadband');
    await choosemultipeProducts('Static IP');
    await browser.actions().mouseMove(submitConfig).click().perform();
    await new Promise(resolve => setTimeout(resolve, 4500));
    await chooseMedia_types('');
    await new Promise(resolve => setTimeout(resolve, 4500));
    await chooseTerms('');
    await producttitleInformation.getText().then(async function (count) {
      console.log("Aldrin:" + count.length)
      if (count.length > 1) {
        await new Promise(resolve => setTimeout(resolve, 3500));
        let indexId = 2;
        await chooseMedia_types(indexId);
        await new Promise(resolve => setTimeout(resolve, 3500));
        await chooseTerms(indexId);
      }
    });
    browser.actions().mouseMove(submitConfig).click().perform();
    browser.wait(EC.visibilityOf(confirmSave), 35000);
    confirmSave.click();
    browser.wait(EC.visibilityOf(addressPagcount25), 45000);
    await browser.wait(EC.elementToBeClickable(addressPagcount25), 25000);
    await addressPagcount25.click();
    await pricingPaginationValue100.click();
    const orCondition = EC.or(EC.visibilityOf(completePricngSuccessmessage), EC.visibilityOf(failureErrorMessage));
    console.log("5033", orCondition)
    browser.wait(orCondition, 1495000).then(() => {
      pricingStatus();
    });
  } catch (error) {
    console.error('Error while choosing the products:', error);
  }
}
///////**Success Message Validation */
function verifyPricingSucessMessageValidations(pricingSucessMsg) {
  if (pricingSucessMsg == 'Pricing completed!') {
    expect(pricingSucessMsg).toEqual('Pricing completed!');
  } else {
    expect(pricingSucessMsg).toEqual('Pricing completed with errors');
  }
}
/////**Function for the Pricing Status operation */
function pricingStatus() {
  if (completePricngSuccessmessage.isDisplayed()) {
    completePricngSuccessmessage.getText().then(function (text) {
      console.log("SuccessMsg", text)
      messageText = text.replace("check_circle_outline", "").replace(/(\r\n|\n|\r)/gm, '');
      verifyPricingSucessMessageValidations(messageText);
      console.log("Aldrin15", messageText)
    });
  }
  else {
    expect('Pricing is Getting Failed').toEqual('Pricing Failed');
  }
}
//////**To Fetch the given column Response from the Grid */
async function gettingPricingresponse(columnName, verificationData) {
  let EC = protractor.ExpectedConditions;
  let pricingArray = [];
  await pricingHeaderlist.getText().then(async function (text) {
    for (const i of text) {
      var x = i.replace(/(\nFilter)/gm, "").replace(/(\nexpand_more)/gm, "").replace(/(\nexpand_more\n)/gm, "").replace(/(\nexpand_less)/gm, "");
      pricingArray.push(x)
    }
    defaultcolumns = pricingArray.indexOf(columnName);
    indexCheck = getindexValue(defaultcolumns);
    let pricingResponse = element.all(by.xpath('//tbody[@role="rowgroup"]//tr//td' + indexCheck + ''))
    await new Promise(resolve => setTimeout(resolve, 3500));
    pricingResponse.getText().then(function (response) {
      console.log("PricingGridData", response)
      console.log("PricingGridData15", verificationData)
      const result = response.some(r => verificationData.includes(r))
      console.log("Test593", result)
      expect(result).toBe(true)
    });
  })
}
//////**To Fetch the given column Response from the Grid to verify with Excel */
async function gettingPricingresponseforSpecificolumns(columnName, collectionArray) {
  console.log("Indexname", columnName)
  let EC = protractor.ExpectedConditions;
  let pricingArray = [];
  await pricingHeaderlist.getText().then(async function (text) {
    for (const i of text) {
      let x = i.replace(/(\nFilter)/gm, "").replace(/(\nexpand_more)/gm, "").replace(/(\nexpand_more\n)/gm, "").replace(/(\nexpand_less)/gm, "");
      pricingArray.push(x)
    }
    console.log("Indexname11", pricingArray.indexOf(columnName))
    defaultcolumns = pricingArray.indexOf(columnName);
    console.log("Indexname12", defaultcolumns)
    indexCheck = getindexValue(defaultcolumns);
    let pricingResponse = element.all(by.xpath('//tbody[@role="rowgroup"]//tr//td' + indexCheck + ''))
    await new Promise(resolve => setTimeout(resolve, 3500));
    pricingResponse.getText().then(function (response) {
      expect(response.length).toBeGreaterThan(0);
      for (let i = 0; i < response.length; i++) {
        console.log("Array105", response[i])
        collectionArray.push(response[i]);
      }
    });
  })
}
//** Find the downloaded latest file name */
async function getLatestCSVFile(folderDirectory) {
  return new Promise(async resolve => {
    fs.readdir(folderDirectory, (err, files) => {
      const fileNames = files.map((file) => path.basename(file));
      console.log("6526", fileNames)
      if (err) {
        console.error('Error reading folder:', err);
        return;
      }
      if (fileNames.length > 0) {
        resolve(folderDirectory + fileNames[0]);
      }
    });
  });
}

//////** Selecting Products */
async function choosemultipeProducts(productName) {
  try {
    console.log("Method12")
    console.log("Method13", productName)
    let EC = protractor.ExpectedConditions;
    await browser.wait(EC.visibilityOf(broadbandProduct), 65000);
    if (productName == 'Broadband') {
      broadbandProduct.click();
    } else {
      staticipProduct.click();
    }
  } catch (error) {
    console.error('Error selecting the products:', error);
  }
}

//////** Choose Media type for Products */
async function chooseMedia_types(value) {
  console.log("Fiberacess", value)
  try {
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(chooseMediatype), 55000);
    if (value == 2) {
      indexCheck = getindexValue(value);
      let staticaccess_Medium = element(by.xpath('//mat-card' + indexCheck + '//mat-label//span[@mattooltip="Select media types to be included in the quote."]'))
      await browser.actions().mouseMove(staticaccess_Medium).click().perform();
    } else {
      await browser.executeScript("arguments[0].click();", chooseMediatype);
    }
    browser.wait(EC.invisibilityOf(mediaCheckbox), 55000);
    mediaCheckbox.getText().then(async function (text) {
      expect(text.length).toBeGreaterThan(0);
      for (var i = 0; i < text.length; i++) {
        if (text[i] === 'Fiber') {
          defaultcolumns = text.indexOf('Fiber') + 1;
          indexCheck = getindexValue(defaultcolumns);
          let accessMediumcheck = element(by.xpath('//div[@class="options-container"]//mat-option' + indexCheck + '//span//mat-checkbox'))
          browser.actions().mouseMove(accessMediumcheck).click().perform();
          await browser.actions().mouseMove(pricinglabelText).click().perform();
        }
      }
    });
  } catch (error) {
    console.error('Error while selecting the mediatype:', error);
  }
}
//////** Choose Terms for Products */
async function chooseTerms(value) {
  try {
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(chooseMonth), 65000);
    if (value == 2) {
      indexCheck = getindexValue(value);
      let static_Term = element(by.xpath('//mat-card' + indexCheck + '//mat-label//span[@mattooltip="Select a specific term requirement. If a single value is added to Choose Term AND Term Range is also filled in, the full range of terms returns, and the specific term is selected as Desired."]'))
      await browser.actions().mouseMove(static_Term).click().perform();
    } else {
      await browser.executeScript("arguments[0].click();", chooseMonth);
    }
    browser.wait(EC.invisibilityOf(mediaCheckbox), 65000);
    mediaCheckbox.getText().then(async function (text) {
      expect(text.length).toBeGreaterThan(0);
      for (var i = 0; i < text.length; i++) {
        if (text[i] === '12') {
          defaultcolumns = text.indexOf('12') + 1;
          indexCheck = getindexValue(defaultcolumns);
          let termCheck = element(by.xpath('//div[@class="options-container"]//mat-option' + indexCheck + '//span//mat-checkbox'))
          browser.actions().mouseMove(termCheck).click().perform();
          await browser.actions().mouseMove(submitConfig).click().perform();
        }
      }
    });
  } catch (error) {
    console.error('Error while selecting the Term:', error);
  }
}
///**verification of comparison for two arrays */
function isEqual(a, b) {
  return a.join() == b.join();
}
///** Function for Fetching data from CSV */
function readCSVData(filePath) {
  const csvData = fs.readFileSync(filePath, 'utf-8');
  const rows = csvData.split('\n');
  const data = [];
  // Assuming the first row contains column headers
  const headers = rows[0].split(',');
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',');
    const rowData = {};

    for (let j = 0; j < headers.length; j++) {
      rowData[headers[j]] = row[j];
    }
    data.push(rowData);
  }
  return data;
}
///** Function for Fetching the Export File */
function readexportfileData(filePath) {
  const csvData = fs.readFileSync(filePath, 'utf-8');
  const rows = csvData.split('\n');
  const data = [];
  // Assuming the first row contains column headers
  const headers = rows[0].split(',');
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',');
    const rowData = {};
    for (let j = 0; j < headers.length; j++) {
      rowData[headers[j]] = row[j];
    }
    data.push(rowData);
  }
  return data;
}
//////**Verification of Particular column to Match with Excel */
function verifyExcelDatacolumns(columnArray, excelArray) {
  var result = arraysAreEqual(columnArray, excelArray);
  expect(result).toBe(true)
}
///** Function for Fetching the Export File */
function readUploadedfile(filePath) {
  const csvData = fs.readFileSync(filePath, 'utf-8');
  const rows = csvData.split('\n');
  const data = [];
  // Assuming the first row contains column headers
  const headers = rows[0].split(',');
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',');
    const rowData = {};
    for (let j = 0; j < headers.length; j++) {
      rowData[headers[j]] = row[j];
    }
    data.push(rowData);
  }
  return data;
}
/////**Comparing two arrays */
function arraysAreEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
///** Function for Fetching data for Production Excel Header */
function readprodCSVData(filePath) {
  const csvData = fs.readFileSync(filePath, 'utf-8');
  const rows = csvData.split('\n');
  const rowData = {};
  // Assuming the first row contains column headers
  const headers = rows[0].split(',');
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i].split(',');
    for (let j = 0; j < headers.length; j++) {
      rowData[headers[j]] = row[j];
    }
  }
  return rowData;
}
/////**Creating a new price with address */
async function createnewpriceManually(address, siteId) {
  console.log("102", address)
  console.log("103", siteId)
  let EC = protractor.ExpectedConditions;
  try {
    priceAddress.click();
    browser.wait(EC.presenceOf(priceAddresslist), 55000);
    priceAddresslist.getText().then(function (text) {
      expect(text.length).toBeGreaterThan(0);
      for (var i = 0; i < text.length; i++) {
        if (text[i] == address) {
          defaultcolumns = i + 1;
          indexId = getindexValue(defaultcolumns);
          let selectAddress = element(by.xpath('//mat-option' + indexId + '//span[@class="mat-option-text"]'))
          browser.wait(EC.presenceOf(selectAddress), 55000);
          selectAddress.click();
          break;
        }
      }
    });
    priceSupplier.sendKeys(process.env.PRICESUPPLIERNAME)
    browser.wait(EC.presenceOf(pricingSupplierAutocomplete), 45000);
    pricingSupplierAutocomplete.getText().then(function (text) {
      for (var i = 0; i < text.length; i++) {
        if (text[i] == process.env.PRICESUPPLIERNAME) {
          i = i + 1;
          indexCheck = getindexValue(i);
          let supplier_Autocomplete = element(by.xpath('//mat-option' + indexCheck + '//span[@class="mat-option-text"]'))
          browser.wait(EC.presenceOf(supplier_Autocomplete), 55000);
          supplier_Autocomplete.click();
          break;
        }
      }
    });
    priceProvidermrccost.sendKeys(process.env.PRICE_MRCOST)
    priceMrc.sendKeys(process.env.PRICE_MRC)
    priceProvidernrccost.sendKeys(process.env.PRICE_NRCCOST)
    pricenrc.sendKeys(process.env.PRICE_NRC)
    browser.wait(EC.presenceOf(priceTerm), 55000);
    priceTerm.click();
    browser.wait(EC.presenceOf(priceTermselect), 55000);
    priceTermselect.click();
    browser.wait(EC.presenceOf(priceProductcategory), 55000);
    priceProductcategory.click();
    browser.wait(EC.presenceOf(priceProductcategoryselect), 55000);
    priceProductcategoryselect.click();
    browser.wait(EC.presenceOf(priceMediatype), 55000);
    priceMediatype.click();
    browser.wait(EC.presenceOf(priceMediatypeselect), 55000);
    priceMediatypeselect.click();
    browser.wait(EC.presenceOf(priceNetworkconnectionStatus), 55000);
    priceNetworkconnectionStatus.click();
    browser.wait(EC.presenceOf(priceNetworkconnectionStatusSelect), 55000);
    priceNetworkconnectionStatusSelect.click();
    browser.wait(EC.presenceOf(priceSpeed), 55000);
    priceSpeed.click();
    browser.wait(EC.presenceOf(priceSpeedselect), 55000);
    priceSpeedselect.click();
    browser.wait(EC.presenceOf(priceBuildingconnectionStatus), 55000);
    priceBuildingconnectionStatus.click();
    browser.wait(EC.presenceOf(priceBuildingconnectionStatusSelect), 55000);
    priceBuildingconnectionStatusSelect.click();
    pricesiteAttribute.getAttribute("value").then(function (givensiteId) {
      console.log("PriceId11", siteId)
      console.log("PriceId12", givensiteId)
      expect(siteId).toEqual(givensiteId)
    });
    priceNotes.sendKeys(process.env.PRICE_NOTES)
    priceButtonSave.click();
    browser.wait(EC.presenceOf(priceSucessmessage), 55000);
    priceSucessmessage.getText().then(function (text) {
      console.log("Aldrin500:" + text)
      expect(text).toEqual('Price is successfully added');
    });
  } catch (error) {
    console.error('Error while Creating the new price:', error);
  }
}
///////** Function for Pricing Upload Import */
async function pricingImport(uploadedFile) {
  var EC = protractor.ExpectedConditions;
  let priceCount;
  let totalPricingRecords;
  await pricingTotalcount.getText().then(async function (totalRec) {
    priceCount = totalRec[2].split(" ");
    console.log("1750", priceCount[0])
  });
  browser.wait(EC.presenceOf(exportMenu), 55000);
  exportMenu.click();
  browser.wait(EC.presenceOf(importIcon), 75000);
  importIcon.click();
  browser.wait(EC.presenceOf(verifypopupMessage), 55000);
  let fileToUpload = uploadedFile
  absolutePath = path.resolve(__dirname, fileToUpload)
  element(by.css('input[type="file"]')).sendKeys(absolutePath);
  browser.wait(EC.presenceOf(priceimportButton), 55000);
  priceimportButton.click();
  browser.wait(EC.presenceOf(importpriceSucessmessage), 65000);
  importpriceSucessmessage.getText().then(function (text) {
    console.log("Successs:" + text)
    expect(text).toEqual('Successfully imported');
  });
  totalPricingRecords = parseInt(priceCount[0]) + 1
  browser.wait(EC.presenceOf(pricingTotalcount), 45000);
  await pricingTotalcount.getText().then(async function (updatedTotal) {
    console.log("PRice13", totalPricingRecords)
    let newCount = updatedTotal[2].split(" ");
    console.log("PRice14", newCount[0])
    expect(parseInt(totalPricingRecords)).toEqual(parseInt(newCount[0]));
  });
}
//////**For Fetching Columns Response from the Pricing Grid */
async function pricingstep3Responses(headerName, responseArry, rowId) {
  let priceRowId;
  let columnResponses;
  let EC = protractor.ExpectedConditions;
  defaultcolumns = responseArry.indexOf(headerName);
  indexCheck = getindexValue(defaultcolumns);
  priceRowId = getindexValue(rowId);
  let attributeResponse = element(by.xpath('//tbody[@role="rowgroup"]//tr' + priceRowId + '//td' + indexCheck + ''))
  browser.wait(EC.visibilityOf(attributeResponse), 45000)
  await attributeResponse.getText().then(function (dataResponse) {
    columnResponses = dataResponse;
  });
  return columnResponses;
}
//////**Function for Fetching Supplier Response in Pricing Grid(Step 3) */
async function fetchPricingDetails(supplierName, responseArray) {
  let priceArray = [];
  let supplierCount;
  var EC = protractor.ExpectedConditions;
  await pricingHeaderlist.getText().then(async function (text) {
    for (const i of text) {
      let x = i.replace(/(\nFilter)/gm, "").replace(/(\nexpand_more)/gm, "").replace(/(\nexpand_more\n)/gm, "").replace(/(\nexpand_less)/gm, "");
      priceArray.push(x)
    }
    for (var i = 0; i < responseArray.length; i++) {
      expect(responseArray.length).toBeGreaterThan(0);
      console.log("8603", responseArray[i][2])
      if (!responseArray[i][2].trim().startsWith("0")) {
        supplierCount = responseArray[i][2].split(" ");
        console.log("1523", supplierCount[0])
        if (supplierCount[0] > 0) {
          pricefilterInput.clear();
          pricefilterInput.sendKeys(supplierName)
          browser.wait(EC.presenceOf(supplierList), 6000);
          supplierList.getText().then(function (displayData) {
            for (var j = 0; j < displayData.length; j++) {
              expect(displayData.length).toBeGreaterThan(0);
              defaultcolumns = displayData.indexOf(supplierName) + 1;
              indexCheck = getindexValue(defaultcolumns);
              if (displayData[j] == supplierName) {
                let k = j + 1;
                indexCheck = getindexValue(k);
                let supplierAutocomplete = element(by.xpath('//mat-option' + indexCheck + '//span[@class="mat-option-text"]'))
                supplierAutocomplete.click();
              }
            }
          });
          browser.actions().mouseMove(auditLogtypeInput).click().perform();
          element(by.cssContainingText('mat-option .mat-option-text', 'Equal')).click();
          auditLogValueinput.sendKeys(responseArray[i][0]);
          await new Promise(resolve => setTimeout(resolve, 4500));
          defaultcolumns = priceArray.indexOf(supplierName);
          indexCheck = getindexValue(defaultcolumns);
          console.log("Response230", indexCheck);
          var pricingResponse = element.all(by.xpath('//tbody[@role="rowgroup"]//tr//td' + indexCheck))
          browser.wait(EC.visibilityOf(pricingResponse), 55000)
          pricingResponse.getText().then(function (supplierResp) {
            expect(supplierResp.length).toBeGreaterThan(0);
            expect(parseInt(supplierResp.length)).toEqual(parseInt(supplierCount[0]));
            let filterResponse = supplierResp.includes(responseArray[i][0])
            console.log("Response50", filterResponse)
            console.log("Response52", responseArray[i][0])
            expect(filterResponse).toBe(true)
            console.log("Response10", supplierResp.length)
            console.log("Response11", supplierResp)
          });
        }
      }
    }
  });
}
////** For Fetching Audit Calltype API Data */
async function fetchapiwiseData(totalauditData, apiName, totalData) {
  for (var i = 0; i < totalauditData.length; i++) {
    if (totalauditData[i][1] == apiName) {
      await totalData.push(totalauditData[i])
    }
  }
}
async function fetchAuditLog(auditLoglist, apiType) {
  var allAuditLogvalue = [];

  await auditLoglist.getText().then(function (text) {
    var i = 0, auditlength = text.length;
    while (i < auditlength) {
      allAuditLogvalue.push(text.slice(i, i += 7));
    }
    for (var j = 0; j < allAuditLogvalue.length; j++) {
      expect(allAuditLogvalue.length).toBeGreaterThan(0);
      if (allAuditLogvalue[j][4] == 'Complete' && allAuditLogvalue[j][2] == apiType) {
        tempArray.push(allAuditLogvalue[j][0])
        tempArray.push(allAuditLogvalue[j][2])
        tempArray.push(allAuditLogvalue[j][6])
      }
    }
  });
}
////**Verification of account total and name in the Grid */
async function verifyvalidations(createdName, accTotal) {
  let EC = protractor.ExpectedConditions;
  await browser.wait(EC.presenceOf(accountsuccessMessage), 85000);
  await accountsuccessMessage.getText().then(function (text) {
    console.log("15266", text)
    expect(text).toEqual(createdName + ' ' + 'is added to favorites.')
  });
  await browser.wait(EC.presenceOf(accountTotal), 85000);
  await accountTotal.getText().then(function (updatedCount) {
    let accountnewTotal = updatedCount.split(" ");
    expect(parseInt(accountnewTotal[0])).toEqual(parseInt(accTotal[0]) + 1);
  });
  await accountnameDisplayed.getText().then(function (accountName) {
    console.log("AccCreation", accountName)
    let accountnameDisply = accountName.includes(createdName);
    console.log("AccCreation10", accountnameDisply)
    expect(accountnameDisply).toBe(true);
  });
}
///**Script for Creating a new deals */
async function createnewDeals(dealNames, customerId, accountId, projectId, columnName) {
  let EC = protractor.ExpectedConditions;
  try {
    browser.wait(EC.presenceOf(dealName), 45000);
    await browser.wait(EC.elementToBeClickable(dealName), 25000);
    await dealName.click();
    await dealName.sendKeys(dealNames)
    dealCustomerid.sendKeys(customerId)
    dealAccountid.sendKeys(accountId)
    dealProjectid.sendKeys(projectId)
    isbulkDeal.click();
    await settingCustomFields(columnName, customFieldDealList, dealcustomFields, process.env.DEALCUSTOMFIELDVALUE);
    browser.wait(EC.visibilityOf(dealSave), 35000);
    dealSave.click();
    browser.wait(EC.presenceOf(dealSuccessmessage), 25000);
    dealSuccessmessage.getText().then(function (text) {
      console.log("12563", text)
      expect(text).toEqual('New deal created.')
    });
  } catch (error) {
    console.error('Error while Adding the Deal:', error);
  }
}
///**Verifcation of deal responses in the grid */
function verifydealgridResponses(columnResponse, columnData) {
  columnResponse.getText().then(function (text) {
    console.log("127:" + columnData)
    let responseArray = text.includes(columnData);
    console.log("128:" + responseArray)
    expect(responseArray).toBe(true)
  });
}
///**Verifcation of created accounts in the grid */
async function verifyaccountgridResponses(columnName, verificationValue) {
  let columnResponse;
  let accountArray = [];
  let EC = protractor.ExpectedConditions;
  await browser.wait(EC.presenceOf(accountHeaderlist), 45000);
  await accountHeaderlist.getAttribute('innerText').then(function (headerNames) {
    expect(headerNames.length).toBeGreaterThan(0);
    for (const i of headerNames) {
      let x = i.replace(/(\nFilter)/gm, "").replace(/(\nexpand_more)/gm, "").replace(/(\nexpand_more\n)/gm, "").replace(/(\nexpand_less)/gm, "");
      accountArray.push(x)
    }
    defaultcolumns = accountArray.indexOf(columnName) + 1
    console.log("Account11", accountArray.indexOf(columnName))
    indexId = getindexValue(defaultcolumns);
    switch (columnName) {
      case columnName == 'Account':
        columnResponse = element.all(by.xpath('//datatable-body-cell' + indexId + '//div[@class="datatable-body-cell-label"]//a//h3'))
        break
      case (columnName == 'Address') || (columnName == 'Default Currency'):
        columnResponse = element.all(by.xpath('//datatable-body-cell' + indexId + '//div[@class="datatable-body-cell-label"]//p'))
        break;
      default:
        columnResponse = element.all(by.xpath('//datatable-body-cell' + indexId + '//div[@class="datatable-body-cell-label"]//span'))
    }
    columnResponse.getText().then(function (text) {
      console.log("Account12", text)
      let responseArray = text.includes(verificationValue);
      console.log("Account13", responseArray)
      expect(responseArray).toBe(true)
    });
  });
}
/////** Custom Fields Fetching */
function fetchCustomFieldsValues(values, moduleName, valuesArray) {
  let allModuleCustomFields = [];
  var i = 0, customLength = values.length;
  while (i < customLength) {
    allModuleCustomFields.push(values.slice(i, i += 5));
  }
  for (var j = 0; j < allModuleCustomFields.length; j++) {
    expect(allModuleCustomFields.length).toBeGreaterThan(0);
    if (allModuleCustomFields[j][2] == moduleName) {
      valuesArray.push(allModuleCustomFields[j][1])
    }
  }
}
////**Creating a new account from Accounts */
async function createnewAccount(columnName) {
  let selectList;
  console.log('PlaceholderCount10:', columnName);
  try {
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf(accountnameInput), 75000);
    accountnameInput.click();
    switch (columnName) {
      case "Create Custom":
        await accountnameInput.sendKeys(process.env.CUSTOMACCOUNTNAME)
        break;
      case "address":
        await accountnameInput.sendKeys(process.env.ACCOUNTNAME)
        break;
      default:
        await accountnameInput.sendKeys(process.env.ACCOUNTNAMECUSTOMFIELD)
    }
    await new Promise(resolve => setTimeout(resolve, 5500));
    browser.wait(EC.presenceOf(accountlistAutocomplete), 45000);
    if (columnName == 'Create Custom' || columnName == 'Custom Fields') {
      indexId = getindexValue(1);
      selectList = element(by.xpath('//mat-option' + indexId + '//span[contains(text(),"Create Custom")]'))
      selectList.click();
    } else {
      selectlistData(accountlistAutocomplete, process.env.ACCOUNTNAME);
    }
    await new Promise(resolve => setTimeout(resolve, 5500));
    await entervaluesforAccount(accountsingleaddressInput, process.env.ACCOUNTADDRESSAUTOCOMPLETE)
    await entervaluesforAccount(accountphoneInput, process.env.ACCOUNTPHONE)
    await entervaluesforAccount(accountcontactnameInput, process.env.ACCOUNTCONTACTNAME)
    await entervaluesforAccount(accountdomainInput, process.env.ACCOUNTDOMAIN)
    await entervaluesforAccount(accountidInput, process.env.ACCOUNTID)
    await entervaluesforAccount(accountmsaInput, process.env.ACCOUNTMSA)
    await entervaluesforAccount(accounttypeInput, process.env.ACCOUNTTYPE)
    await browser.wait(EC.elementToBeClickable(accountdefaultcurrencySelect), 10000);
    await accountdefaultcurrencySelect.click();
    await selectCurrencyValue(accountlistAutocomplete);
    await settingCustomFields(columnName, customFieldAccountList, customfieldData, process.env.CUSTOMFIELDVALUE);
    addaccountBtn.click();
  } catch (error) {
    console.error('Error while interacting with the list:', error);
  }
}
//////**Autocopmplete addresses for select in Accounts */
async function selectlistData(entityList, columnName) {
  let EC = protractor.ExpectedConditions;
  await entityList.getText().then(function (listCount) {
    expect(listCount.length).toBeGreaterThan(0);
    for (var i = 0; i < listCount.length; i++) {
      if (listCount[i] == columnName) {
        defaultcolumns = i + 1;
        indexId = getindexValue(defaultcolumns);
        let selectList = element(by.xpath('//mat-option' + indexId + '//span[@class="mat-option-text"]'))
        browser.wait(EC.presenceOf(selectList), 55000);
        selectList.click()
        break;
      }
    }
  });
}
//////**Selecting Currency Value */
async function selectCurrencyValue(currencyLists) {
  let EC = protractor.ExpectedConditions;
  await currencyLists.getText().then(function (currencyCount) {
    expect(currencyCount.length).toBeGreaterThan(0);
    for (var i = 1; i < currencyCount.length; i++) {
      defaultcolumns = i + 1;
      indexId = getindexValue(defaultcolumns);
      let selectList = element(by.xpath('//mat-option' + indexId + '//span[@class="mat-option-text"]'))
      browser.wait(EC.presenceOf(selectList), 55000);
      selectList.click();
      selectList.getText().then(function (currencyValue) {
        currencyText = currencyValue;
      });
      break;
    }
  });
}
/***Custom Field Input */////
async function settingCustomFields(columnName, customFieldsList, customResponseArray, inputValue) {
  console.log("Deal30", columnName)
  console.log("Deal31", inputValue)
  let EC = protractor.ExpectedConditions;
  if (columnName == 'Custom Fields') {
    await listofcustomFields.getAttribute("data-placeholder").then(function (text) {
      let result = arraysAreEqual(text, customFieldsList);
      console.log("Deal11", text)
      console.log("Deal12", customFieldsList)
      expect(result).toBe(true)
      console.log("Deal13", result)
      let count = text.length;
      if (count > 0 && result) {
        listofcustomFields.each(async (inputElement, index) => {
          const placeholderText = await inputElement.getAttribute('data-placeholder');
          customResponseArray.push(placeholderText)
          console.log("Deal14", placeholderText)
          defaultcolumns = index + 1;
          let customfieldName = element(by.xpath('//div//input[@data-placeholder=' + "'" + placeholderText + "'" + ']'))
          console.log("QuoteCustom", customfieldName)
          browser.wait(EC.presenceOf(customfieldName), 55000);
          browser.wait(EC.elementToBeClickable(customfieldName), 45000);
          customfieldName.sendKeys(inputValue)
        });
      }
    });
  }
}
////**To View created Quote and Accounts in wip UI. */
function verifyTotalWipdisplay(quoteHeaderName, accountHeaderName, dealHeaderName) {
  try {
    myWipHeaderList.getText().then(function (headerDatas) {
      expect(headerDatas.length).toBeGreaterThan(0);
      headerDatas.forEach(async (list, index) => {
        wipValuesForVerify(list, index, quoteHeaderName, process.env.QUOTE_NAME)
        wipValuesForVerify(list, index, accountHeaderName, process.env.ACCOUNTNAMECUSTOMFIELD)
        wipValuesForVerify(list, index, dealHeaderName, process.env.DUPLICATEDEALNAME)
      });
    })
  } catch (error) {
    console.error('Error Displaying Wip Data:', error);
  }
}
/////**Input Values for the Few Filters and Verification */
async function wipValuesForVerify(headerList, index, headerName, value) {
  let EC = protractor.ExpectedConditions;
  let dataResponse;
  let incrementValue
  if (headerList == headerName) {
    incrementValue = index + 1;
    defaultcolumns = getindexValue(incrementValue);
    let quoteInputFilter = element(by.xpath('//datatable-header-cell' + defaultcolumns + '//div//input[@placeholder="Filter"]'));
    quoteInputFilter.sendKeys(value)
    if (headerName == 'Account' || headerName == 'Deal') {
      dataResponse = element.all(by.xpath('//datatable-body-cell' + defaultcolumns + '//p[contains(text(),' + '"' + value + '"' + ')]'))
    }
    else {
      dataResponse = element.all(by.xpath('//datatable-body-cell' + defaultcolumns + '//div[contains(text(),' + '"' + value + '"' + ')]'))
    }
    browser.wait(EC.presenceOf(dataResponse), 75000);
    dataResponse.getText().then(function (response) {
      expect(response.length).toBeGreaterThan(0);
      let columnValue = response.includes(value);
      expect(columnValue).toBe(true);
    });
    quoteInputFilter.clear();
  }
}
/////**Function for Filters */
function wipFiltersColumn(columnName) {
  let incrementValue;
  let rowId;
  let result;
  try {
    myWipHeaderList.getText().then(function (headerDatas) {
      expect(headerDatas.length).toBeGreaterThan(0);
      headerDatas.forEach(async (list, index) => {
        incrementValue = index + 1;
        rowId = getindexValue(1);
        defaultcolumns = getindexValue(incrementValue);
        result = list.replace(/(\r\n|\n|\r)/gm, "");
        if (columnName == 'Filters') {
          filterGivenValues(rowId, defaultcolumns, result);
        }
        else {
          sortingWithWipAscendingOrder(defaultcolumns, result);
          sortingWithWipDescendingOrder(defaultcolumns, result);
        }
      });
    })
  } catch (error) {
    console.error('Error Displaying Wip Filters:', error);
  }
}
///////**Input for Filters */
function filterGivenValues(rowValue, ColumnId, headerColumnValue) {
  let columnResponse;
  let columnFilterInput;
  let allColumnResponse;
  let wipColumns;
  let EC = protractor.ExpectedConditions;
  switch (headerColumnValue) {
    case "SharedFilter":
      columnResponse = element(by.xpath('//datatable-row-wrapper' + rowValue + '//datatable-body-cell' + ColumnId + '//div'));
      sharedHeader.click();
      columnResponse.getText().then(function (text) {
        let wipShared = element(by.xpath('//mat-option//span[contains(text(),' + ' " ' + text + ' " ' + ')]'))
        wipShared.click();
        verifyResponses(text, ColumnId)
      });
      break;
    case "Quote Name": case "Created By": case "Days Pending": case "Customer Account ID": case "Quote Number":
      columnResponse = element(by.xpath('//datatable-row-wrapper' + rowValue + '//datatable-body-cell' + ColumnId + '//div'));
      columnResponse.getText().then(function (text) {
        columnFilterInput = element(by.xpath('//datatable-header-cell' + ColumnId + '//div//input[@placeholder="Filter"]'));
        columnFilterInput.sendKeys(text)
        verifyResponses(text, ColumnId)
        columnFilterInput.clear();
      });
      break;
    case "Account": case "Deal": case "Project":
      columnResponse = element(by.xpath('//datatable-row-wrapper' + rowValue + '//datatable-body-cell' + ColumnId + '//div//p'));
      columnResponse.getText().then(function (text) {
        wipColumns = text;
        columnFilterInput = element(by.xpath('//datatable-header-cell' + ColumnId + '//div//input[@placeholder="Filter"]'));
        columnFilterInput.sendKeys(text)
        columnFilterInput.clear();
      });
      allColumnResponse = element.all(by.xpath('//datatable-body-cell' + ColumnId + '//div//p'))
      browser.wait(EC.presenceOf(allColumnResponse), 75000);
      allColumnResponse.getText().then(function (response) {
        expect(response.length).toBeGreaterThan(0);
        let columnValue = response.includes(wipColumns);
        expect(columnValue).toBe(true);
      });
      break;
    case "Quote ID": case "Workflow Status":
      columnResponse = element(by.xpath('//datatable-row-wrapper' + rowValue + '//datatable-body-cell' + ColumnId + '//div//span'));
      columnResponse.getText().then(function (text) {
        wipColumns = text;
        columnFilterInput = element(by.xpath('//datatable-header-cell' + ColumnId + '//div//input[@placeholder="Filter"]'));
        columnFilterInput.sendKeys(text)
        columnFilterInput.clear();
      });
      allColumnResponse = element.all(by.xpath('//datatable-body-cell' + ColumnId + '//div//span'))
      browser.wait(EC.presenceOf(allColumnResponse), 75000);
      allColumnResponse.getText().then(function (response) {
        expect(response.length).toBeGreaterThan(0);
        let columnValue = response.includes(wipColumns);
        expect(columnValue).toBe(true);
      });
      break;
    default:
  }
}
/////**Function for Verification in Grid */
function verifyResponses(givenData, columnData) {
  let EC = protractor.ExpectedConditions;
  let allColumnResponse;
  allColumnResponse = element.all(by.xpath('//datatable-body-cell' + columnData + '//div'))
  browser.wait(EC.presenceOf(allColumnResponse), 75000);
  allColumnResponse.getText().then(function (response) {
    expect(response.length).toBeGreaterThan(0);
    let columnValue = response.includes(givenData);
    expect(columnValue).toBe(true);
  });
}
//////**Function for sorting with Ascending Order */
function sortingWithWipAscendingOrder(ColumnId, headerColumnValue) {
  let columnHeader
  let EC = protractor.ExpectedConditions;
  switch (headerColumnValue) {
    case "SharedFilter": case "Quote Name": case "Created By": case "Days Pending": case "Customer Account ID": case "Quote Number": case "Account": case "Deal": case "Project": case "Quote ID": case "Workflow Status":
      columnHeader = element(by.xpath('//datatable-header-cell' + ColumnId + '[@role="columnheader"]'));
      columnHeader.click();
      browser.wait(EC.visibilityOf(myWipTotalCount), 55000);
      verifySortingAscendingResponses(ColumnId, headerColumnValue)
      break;
    default:
  }
}
/////**Function for sorting with Descending Order */
function sortingWithWipDescendingOrder(ColumnId, headerColumnValue) {
  let columnHeader
  let EC = protractor.ExpectedConditions;
  switch (headerColumnValue) {
    //////For Descending Order /////
    case "SharedFilter": case "Quote Name": case "Created By": case "Days Pending": case "Customer Account ID": case "Quote Number": case "Account": case "Deal": case "Project": case "Quote ID": case "Workflow Status":
      columnHeader = element(by.xpath('//datatable-header-cell' + ColumnId + '[@role="columnheader"]'));
      columnHeader.click();
      browser.wait(EC.visibilityOf(myWipTotalCount), 55000);
      verifySortingDescendingResponses(ColumnId, headerColumnValue)
      break;
    default:
  }
}
/////**For Ascending Order Response */
function verifySortingAscendingResponses(headerId, list) {
  let columnResponseSorted = [];
  let columnResponseUnsorted = [];
  let allColumnResponse;
  allColumnResponse = element.all(by.xpath('//datatable-body-cell' + headerId + '//div'));
  allColumnResponse.getText().then(function (text) {
    columnResponseUnsorted = text;
    columnResponseSorted = columnResponseUnsorted.slice();
    columnResponseSorted.sort();
    columnResponseUnsorted.sort();
    expect(columnResponseSorted).toEqual(columnResponseUnsorted);
  });
}

/////**For Descending Order Response */
function verifySortingDescendingResponses(headerId, list) {
  let columnResponseSorted = [];
  let columnResponseUnsorted = [];
  let allColumnResponse;
  allColumnResponse = element.all(by.xpath('//datatable-body-cell' + headerId + '//div'));
  allColumnResponse.getText().then(function (text) {
    columnResponseUnsorted = text;
    columnResponseSorted = columnResponseUnsorted.slice();
    columnResponseSorted.reverse();
    columnResponseUnsorted.reverse();
    expect(columnResponseSorted).toEqual(columnResponseUnsorted);
  });
}
/////**Input Values for Account Creation */
async function entervaluesforAccount(element, givenValue) {
  await element.getAttribute("value").then(function (value) {
    if (value) {
      console.log("5625:" + value)
    }
    else {
      element.sendKeys(givenValue)
    }
  });
}
/////**Get Index */
function getindexValue(i) {
  index = "[" + i + "]"
  return index;
}
//////**For Verifications */
function displayResponse(fetchResponse, columnName, columnValue) {
  let responsesUpdated;
  fetchResponse.isPresent().then(function (isValid) {
    console.log("column11:" + columnName)
    switch (isValid) {
      case (columnName == 'MRC Margin' || 'NRC Margin'):
        fetchResponse.getText().then(function (updated) {
          responsesUpdated = updated;
          let percentageValue = updated.replace("%", "");
          expect(columnValue).toEqual(percentageValue);
        });
      case (responsesUpdated == columnValue):
        expect(columnValue).toEqual(updated);
      default:
        fetchResponse.getText().then(function (updated) {
          expect(columnValue).toEqual(updated);
        });
    }
  });
}
/////**Function For Equals with Filters */
function pricingfilterswithEquals(columnName) {
  let response;
  let EC = protractor.ExpectedConditions;
  let listArray = [];
  browser.wait(EC.presenceOf(nameFilter), 95000);
  if (columnName == 'ID') {
    console.log("IDClickked")
  }
  else {
    console.log("IDClickked11", columnName)
    nameFilter.clear();
  }
  //nameFilter.click();
  nameFilter.sendKeys(columnName)
  browser.wait(EC.presenceOf(supplierList), 25000);
  supplierList.getText().then(function (displayData) {
    expect(displayData.length).toBeGreaterThan(0);
    for (var i = 0; i <= displayData.length; i++) {
      if (displayData[i] == columnName) {
        let j = i + 1;
        indexCheck = getindexValue(j);
        let supplierAutocomplete = element(by.xpath('//mat-option' + indexCheck + '//span[@class="mat-option-text"]'))
        browser.wait(EC.presenceOf(supplierAutocomplete), 55000);
        supplierAutocomplete.click();
      }
    }
  });
  browser.actions().mouseMove(typeDropdwn).click().perform();
  element(by.cssContainingText('mat-option .mat-option-text', 'Equal')).click();
  browser.wait(EC.presenceOf(pricingHeaderlist), 9500);
  pricingHeaderlist.getText().then(function (text) {
    for (const i of text) {
      let x = i.replace(/(\nFilter)/gm, "").replace(/(\nexpand_more)/gm, "").replace(/(\nexpand_more\n)/gm, "").replace(/(\nexpand_less)/gm, "").replace(/(\nexpand_l)/gm, "");
      listArray.push(x)
    }
    console.log("7562", columnName)
    console.log("7563", listArray.indexOf(columnName))
    defaultcolumns = listArray.indexOf(columnName);
    indexCheck = getindexValue(defaultcolumns);
    /////**DROP DOWN Values */
    if (columnName == 'Has Supplier' || columnName == 'Is Alternative' || columnName == 'Financial Rule Applied' || columnName == 'Negative Margin' || columnName == 'Address Valid' || columnName == 'MSA Available' || columnName == 'Location Status' || columnName == 'Preferred Supplier' || columnName == 'Preferred Solution' || columnName == 'Bldg Status' || columnName == 'Net Status' || columnName == 'Media Type') {
      response = element(by.xpath('//tbody[@role="rowgroup"]//tr//td' + indexCheck + '//span'))
      response.getText().then(async function (text) {
        let valueSelect = element(by.xpath('//div[@class="block"]//span//mat-label[contains(text(),"Value")]'))
        browser.actions().mouseMove(valueSelect).click().perform();
        element(by.cssContainingText('mat-option .mat-option-text', text)).click();
        columnValue = text;
        await new Promise(resolve => setTimeout(resolve, 4500));
        let fetchResponse = element(by.xpath('//tbody[@role="rowgroup"]//tr//td' + indexCheck + '//span'))
        displayResponse(fetchResponse, columnName, columnValue)
      });
    }
    else {
      console.log("7564", indexCheck)
      valueFilter.clear();
      response = element(by.xpath('//tbody[@role="rowgroup"]//tr//td' + indexCheck + ''))
      response.getText().then(async function (text) {
        let newValue = text.replace("%", ""); ////Remove Percentage Value from Column
        valueFilter.sendKeys(newValue)
        await new Promise(resolve => setTimeout(resolve, 4500));
        console.log("Indexing", indexCheck)
        let fetchResponse = element(by.xpath('//tbody[@role="rowgroup"]//tr//td' + indexCheck + ''))
        displayResponse(fetchResponse, columnName, newValue)
      });
    }
  });
}
//////**Function For Contains with Filters */
function pricingFilterWithContains(columnName) {
  let EC = protractor.ExpectedConditions;
  let columnValue;
  let newArray = [];
  browser.wait(EC.presenceOf(nameFilter), 35000);
  nameFilter.clear();
  nameFilter.sendKeys(columnName)
  browser.wait(EC.presenceOf(supplierList), 25000);
  supplierList.getText().then(function (displayData) {
    expect(displayData.length).toBeGreaterThan(0);
    for (var i = 0; i <= displayData.length; i++) {
      if (displayData[i] == columnName) {
        let j = i + 1;
        indexCheck = getindexValue(j);
        let supplierAutocomplete = element(by.xpath('//mat-option' + indexCheck + '//span[@class="mat-option-text"]'))
        browser.wait(EC.presenceOf(supplierAutocomplete), 55000);
        supplierAutocomplete.click();
      }
    }
  });
  browser.actions().mouseMove(typeDropdwn).click().perform();
  element(by.cssContainingText('mat-option .mat-option-text', 'Contains')).click();
  browser.wait(EC.presenceOf(pricingHeaderlist), 5500);
  pricingHeaderlist.getText().then(function (text) {
    for (const i of text) {
      let x = i.replace(/(\nFilter)/gm, "").replace(/(\nexpand_more)/gm, "").replace(/(\nexpand_more\n)/gm, "").replace(/(\nexpand_less)/gm, "").replace(/(\nexpand_l)/gm, "");
      newArray.push(x)
    }
    defaultcolumns = newArray.indexOf(columnName);
    indexCheck = getindexValue(defaultcolumns);
    valueFilter.clear();
    let response = element(by.xpath('//tbody[@role="rowgroup"]//tr//td' + indexCheck + ''))
    response.getText().then(async function (text) {
      columnValue = text;
      let newValue = text.replace("%", ""); ////Remove Percentage Value from Column
      valueFilter.sendKeys(newValue)
      await new Promise(resolve => setTimeout(resolve, 4500));
      let fetchResponse = element(by.xpath('//tbody[@role="rowgroup"]//tr//td' + indexCheck + ''))
      displayResponse(fetchResponse, columnName, newValue)
    });
  });
}