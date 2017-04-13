@extends('layouts.master')

@section('pageTitle', 'Dashboard')
@section('pageSubTitle', 'Control panel')

@section('content')
    <div id="app">
        <div class="col-lg-12">
            <p>
                @{{ message }}
            </p>

            <p>
                <!-- use router-link component for navigation. -->
                <!-- specify the link by passing the `to` prop. -->
                <!-- <router-link> will be rendered as an `<a>` tag by default -->
                <router-link to="/foo">Go to Foo</router-link>
                <router-link to="/bar">Go to Bar</router-link>
                <router-link to="/dashboard">Dashboard</router-link>
            </p>


        </div>

        <router-view></router-view>
@endsection
