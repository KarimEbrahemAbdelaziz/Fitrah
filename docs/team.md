---
layout: page
---
<script setup>
import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
} from 'vitepress/theme'

const members = [
    {
        avatar: 'https://avatars.githubusercontent.com/u/24304313?s=96&v=4',
        name: 'Karem Ebrahim',
        title: 'Creator & Maintainer',
        links: [
            { icon: 'github', link: 'https://github.com/KarimEbrahemAbdelaziz' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/karimebrahem' },
            { icon: 'twitter', link: 'https://twitter.com/k_ebrahem_' }
        ]
    },
]
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>
            Fitrah Team
        </template>
        <template #lead>
            The development of Fitrah is guided by an awesome
            team, some of whom have chosen to be featured below.
        </template>
    </VPTeamPageTitle>
    <VPTeamMembers
        :members="members"
    />
</VPTeamPage>