<script setup>
import AdComponent from '@/components/consumer/location/AdComponent.vue';
import SearchComponent from '@/components/consumer/location/SearchComponent.vue';
import LHListComponent  from  '@/components/consumer/location/LHListComponent.vue';
import LHListComponent2  from  '@/components/consumer/location/LHListComponent2.vue';
import PaginationComponent from '@/components/consumer/utils/PaginationComponent.vue';
</script>
<template>
    <AdComponent/>
    <SearchComponent />
    <LHListComponent class="d-lg-none"/>
    <LHListComponent2  class="d-none d-lg-block"/>
    <PaginationComponent/>
</template>