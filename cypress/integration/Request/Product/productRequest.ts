import { elements as el } from '../../../elements';
import { dataParameters } from '../../../dataParameters'
import { ShowRecordsQuantityElement } from '../../../DataParameters/Enums/showRecordsQuantityElement';
import { SortByColumnElement } from '../../../DataParameters/Enums/sortByColumnElement';
import { SearchColumnElement } from '../../../DataParameters/Enums/searchColumnElement';
import { SearchParameterElement } from '../../../DataParameters/Enums/searchParameterElement';
import { GetDataOnGrid } from '../../../DataParameters/Interfaces/interfaces';




const {
    logout,
    optionsMenu,
    menuReduced,
    breadcumbHome,
    breadcumbUser,
    showQuantityRecords,
    SearchRegisteredUser,
    nextPage,
    pagePrevious,
} = el.Shared

const {
    titleLogin,
    email,
    password,
    access,
    messageContainer,
} = el.Login

const {

} = el.CustomCommands

const {
    userProfile,
    homeMenu,
    logoGecom,
    homeScreen,
} = el.Start

const {
    registrationMenu,
    registrationMenuReduced,
    registrationUserSubMenu,
    createNewUser,
    username,
    birthdateUser,
    cpfCnpjUser,
    phoneUser,
    emailUser,
    userPassword,
    confirmUserPassword,
    sectorUser,
    optionUserSector,
    optionSelectUserSector,
    optionSelectedSectorUser,
    userApprover,
    optionUserApprover,
    limitUserApproval,
    centerPermittedCostUser,
    selectAllAllowedCostCenterUser,
    clearCenterPermittedCostUser,
    saveUserRegistration,
    cancelUserRegistration,
    registrationSupplierSubMenu,
    messageRequirementName,
    messageRequirementCpfCnpj,
    messageRequiredTelephone,
    searchColumn,
} = el.Register

const {
    requestMenu,
    newRequestSubMenu,
    myRequestSubMenu,
    requestGeneralSubMenu,
} = el.Request

const {
    supplyMenu,
    dashboardSubMenu,
    productSubMenu,
    serviceSubMenu,
    contractSubMenu,
} = el.Supply




describe('Testes da página de criação de solicitação de produtos', () => {


    beforeEach(function () {
        cy.login(dataParameters.env.EMAIL_ADMIN, dataParameters.env.PASSWORD_ADMIN, messageContainer)
            .then((result) => {
                assert.exists(result.success, result.error)
            });
    })

    it(`userRegistration`, () => {
        cy.getElementAndClick('.main-nav > :nth-child(3) > .btn');
        cy.getElementAndClick('[data-cy="dropdown-solicitacoes-novas"]');
        // cy.pause();
        cy.getElementAndClick(':nth-child(1) > .request-dashboard-requests-item-btn');

        cy.createRequest();

    });
})


/*
searchPrescription
newUserRegistration
    VALIDACOES DE CAMPOS
    VALIDACAO CAMPO PASSWORD
    VALIDACAO CAMPO CNPJ
    VALIDACAO CAMPO TELEFONE CELULAR
    VALIDACAO CAMPO EMAIL
    OBRIGATORIEDADE DOS CAMPOS
    LIMITE DE CARACTERES NO CAMPOS
    TIPO DE DADO ACEITO NOS CAMPOS
    VALIDAR MENSAGENS DE RETORNO
    
    
editNewUser
deleteNewUser

*/