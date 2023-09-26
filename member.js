function skillsMember(){
    return {
        restrict: 'E',
        charAttemplateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: ''
        }
    }
}