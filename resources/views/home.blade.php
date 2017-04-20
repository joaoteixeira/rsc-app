@extends('layouts.master')

@section('pageTitle', 'Dashboard')
@section('pageSubTitle', 'Control panel')

@section('content')
    <div id="app">
        <router-view></router-view>
    </div>
@endsection
