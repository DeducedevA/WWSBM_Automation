import 'cypress-file-upload';
import exl_loginpage from '../../../../support/pageObjects/WWSBM External/exl_loginpage.cy';
import exl_dashboard from '../../../../support/pageObjects/WWSBM External/exl_dashboard.cy';
import exl_DataGroups from '../../../../support/pageObjects/WWSBM External/exl_EB_DataGroups.cy';
import exl_ChartInsights from '../../../../support/pageObjects/WWSBM External/exl_EB_ChartInsights.cy';
import exl_AllChartView from '../../../../support/pageObjects/WWSBM External/exl_EB_AllChartView.cy';
import exl_UserDirectory from '../../../../support/pageObjects/WWSBM External/exl_stgs_UserDirectory.cy';
import exl_notifications from '../../../../support/pageObjects/WWSBM External/exl_stgs_Notifications.cy';
import exl_exclusionlist from '../../../../support/pageObjects/WWSBM External/exl_stgs_ExclusionList.cy';
import exl_editprofile from '../../../../support/pageObjects/WWSBM External/exl_stgs_EditProfile.cy';
import exl_recenthistory from '../../../../support/pageObjects/WWSBM External/exl_stgs_RecentHistory.cy';
import exl_paymentcalc from '../../../../support/pageObjects/WWSBM External/exl_tls_PaymentCalc.cy';
import exl_NPIvalidation from '../../../../support/pageObjects/WWSBM External/exl_tls_NPIValidation.cy';
import exl_reportrepo from '../../../../support/pageObjects/WWSBM External/exl_stgs_ReportRepo.cy';
import exl_link from '../../../../support/pageObjects/WWSBM External/exl_Link.cy';


describe('MYWWSBM External Client dministrator', function () {

    let loginPage, dashboard, datagroups, chartinsights, allchartview, userdirectory, notifications,
        exclusionlist, reportrepo, editprofile, recenthistory, paymentcalc, NPIvalidation, link;

    before(function () {
        // Initialize the object before all tests
        link = new exl_link();
        loginPage = new exl_loginpage();
        dashboard = new exl_dashboard();
        datagroups = new exl_DataGroups();
        chartinsights = new exl_ChartInsights();
        allchartview = new exl_AllChartView();
        userdirectory = new exl_UserDirectory();
        notifications = new exl_notifications();
        exclusionlist = new exl_exclusionlist();
        editprofile = new exl_editprofile();
        recenthistory = new exl_recenthistory();
        paymentcalc = new exl_paymentcalc();
        NPIvalidation = new exl_NPIvalidation();
        reportrepo = new exl_reportrepo();


    });

    beforeEach(function () {
        // Load credentials from the fixture
        cy.fixture('mywwsbm_external').then((mywwsbm_external) => {
            this.mywwsbm_external = mywwsbm_external;
        });
    });

    it('Home', function () {

        // URL
        link.Link(this.mywwsbm_external.External_URL);

        // Login details
        loginPage.login(this.mywwsbm_external.VV_username, this.mywwsbm_external.VV_password);
        loginPage.homepage(this.mywwsbm_external.home); // home navigations

        loginPage.GlobalSearch(this.mywwsbm_external.Patient_name); //Global Search
        loginPage.Filters(this.mywwsbm_external.Start_Date, this.mywwsbm_external.End_Date, this.mywwsbm_external.DeliveredOn,
            this.mywwsbm_external.Internal_FTP, this.mywwsbm_external.Primary_Insurance, this.mywwsbm_external.Caller, this.mywwsbm_external.Verifier);

    });

    it('Dashboard', function () {

        // URL
        link.Link(this.mywwsbm_external.External_URL);

        // Login details
        loginPage.login(this.mywwsbm_external.VV_username, this.mywwsbm_external.VV_password);

        // Dashboard
        dashboard.dashboard(this.mywwsbm_external.dashboard); //Dasboard Navigation
        dashboard.date_range(this.mywwsbm_external.Start_Date, this.mywwsbm_external.End_Date); //Date Range
        dashboard.filters(this.mywwsbm_external.State, this.mywwsbm_external.Product, this.mywwsbm_external.Status, this.mywwsbm_external.Insurance,
            this.mywwsbm_external.DeliveredOn, this.mywwsbm_external.Subsequent_VF, this.mywwsbm_external.Internal_FTP); //Dashboard Filters

    });

    it('Eligibility and Benefits (Data Groups)', function () {

        // URL
        link.Link(this.mywwsbm_external.External_URL);

        // Login Details
        loginPage.login(this.mywwsbm_external.VV_username, this.mywwsbm_external.VV_password);

        // sidebar Navigation to Data groups
        datagroups.datagroups(this.mywwsbm_external.EB, this.mywwsbm_external.Data_Groups);
        datagroups.searchbar(this.mywwsbm_external.DataGroup_ID);  // Top Searchbar
        datagroups.DGfilters();  // filters
        datagroups.chart();  //chart
        datagroups.chartDownload(this.mywwsbm_external.Download_Chart, this.mywwsbm_external.fileName);  // Chart Download
        datagroups.CHfilters();  //Chart Filter

    });

    it('Eligibility and Benefits (Chart Insights)', function () {

        // URL
        link.Link(this.mywwsbm_external.External_URL);

        // Login Details
        loginPage.login(this.mywwsbm_external.VV_username, this.mywwsbm_external.VV_password);

        chartinsights.chartinsights(this.mywwsbm_external.EB, this.mywwsbm_external.Charts_Insights); // Chart Insight Navigation
        chartinsights.CIfilters(); // filters
        chartinsights.chart(); //chart open
        datagroups.chartDownload(this.mywwsbm_external.Download_Chart, this.mywwsbm_external.fileName);  // Chart Download
        datagroups.CHfilters();  //Chart Filter

    });

    it('Eligibility and Benefits (All Chart View)', function () {

        //     URL
        link.Link(this.mywwsbm_external.External_URL);

        // Login Details
        loginPage.login(this.mywwsbm_external.VV_username, this.mywwsbm_external.VV_password);
        allchartview.AllChartView(this.mywwsbm_external.EB, this.mywwsbm_external.AllCharts_View); //All Chart View Navigation
        allchartview.PatientSearch(this.mywwsbm_external.Patient_name); // PAtient Search by name
        allchartview.filters(this.mywwsbm_external.AllCharts_View); //Filters
        allchartview.charts(); //open charts
        allchartview.ChartDownload(this.mywwsbm_external.Download_Chart, this.mywwsbm_external.fileName);

    });

    it('Settings (Notifications)', function () {

        //URL
        link.Link(this.mywwsbm_external.External_URL);

        loginPage.login(this.mywwsbm_external.VV_username, this.mywwsbm_external.VV_password);  // Login Details
        notifications.Notification(this.mywwsbm_external.Settings, this.mywwsbm_external.Notifications)
        notifications.SearchBar(this.mywwsbm_external.TopSearchBar);
        notifications.Status();
        notifications.DateRange(this.mywwsbm_external.startDate_Nofo, this.mywwsbm_external.endDate_Nofo);

    });

    it('Settings (Payer Exclusion List)', function () {

        // URL
        link.Link(this.mywwsbm_external.External_URL);

        loginPage.login(this.mywwsbm_external.VV_username, this.mywwsbm_external.VV_password); //login details
        exclusionlist.ExclusionList(this.mywwsbm_external.Settings, this.mywwsbm_external.PayerExclusionList); //Exclusion List Navigation
        exclusionlist.Download();
    });

    it('Settings (Report Repository)', function () {

        // URL
        link.Link(this.mywwsbm_external.External_URL);

        loginPage.login(this.mywwsbm_external.VV_username, this.mywwsbm_external.VV_password); // Login Details
        reportrepo.ReportRepo(this.mywwsbm_external.Settings, this.mywwsbm_external.Report_Repository);
        reportrepo.MonthlyReport(this.mywwsbm_external.FileName, this.mywwsbm_external.OK, this.mywwsbm_external.Confirm);
        reportrepo.WeeklyReport(this.mywwsbm_external.FileName, this.mywwsbm_external.OK, this.mywwsbm_external.Confirm);
        reportrepo.DailyReport(this.mywwsbm_external.RepoDate1, this.mywwsbm_external.RepoDate2, this.mywwsbm_external.FileName, this.mywwsbm_external.OK, this.mywwsbm_external.Confirm);
        // reportrepo.ManageReports(this.mywwsbm_external.Test);

    });

    it('Settings (Edit Profile)', function () {

        //URL
        link.Link(this.mywwsbm_external.External_URL);


        loginPage.login(this.mywwsbm_external.VV_username, this.mywwsbm_external.VV_password); // Login Details
        editprofile.EditProfile(this.mywwsbm_external.Settings, this.mywwsbm_external.Edit_Profile); //edit profile navigation
        editprofile.EditName(this.mywwsbm_external.F_name, this.mywwsbm_external.L_name);
        editprofile.EditToggle();
        editprofile.ChangePassword(this.mywwsbm_external.CA_password);

    });

    it('Settings (Recent History)', function () {

        //URL
        link.Link(this.mywwsbm_external.External_URL);

        loginPage.login(this.mywwsbm_external.VV_username, this.mywwsbm_external.VV_password);  // Login Details 
        recenthistory.RecentHistory(this.mywwsbm_external.Settings, this.mywwsbm_external.Recent_History); // recent history navigation
        recenthistory.Chart(); //view chart
        recenthistory.Filters(this.mywwsbm_external.Patient_name, this.mywwsbm_external.startDate_Nofo, this.mywwsbm_external.Primary_InsuranceNUM,
            this.mywwsbm_external.Primary_Insurance, this.mywwsbm_external.Chart_Status); //filters
    });

    it('Tools (Payment Calculator)', function () {

        //URL
        link.Link(this.mywwsbm_external.External_URL);
        loginPage.login(this.mywwsbm_external.VV_username, this.mywwsbm_external.VV_password);  // Login Details 
        paymentcalc.PaymentCalc(this.mywwsbm_external.Tools, this.mywwsbm_external.PaymentCalc); // PaymentCalc navigation
        paymentcalc.Form(this.mywwsbm_external.Num1, this.mywwsbm_external.Num2); // calc fields

    });

    it('Tools (NPI Validation)', function () {

        //URL
        link.Link(this.mywwsbm_external.External_URL);

        loginPage.login(this.mywwsbm_external.VV_username, this.mywwsbm_external.VV_password);  // Login Details 
        NPIvalidation.NPIValidation(this.mywwsbm_external.Tools, this.mywwsbm_external.NPI_nav); //NPI navigation
        NPIvalidation.NPI(this.mywwsbm_external.NPI_num); // Npi validation
        NPIvalidation.Download(); // Download physician details

    });


});
