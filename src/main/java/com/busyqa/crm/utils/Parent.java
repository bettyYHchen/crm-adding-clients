package com.busyqa.crm.utils;

public class Parent {

    int myVar;

    public Parent() {
    }

    public Parent(int myVar) {
        this.myVar = myVar;
    }

    public int getMyVar() {
        return myVar;
    }

    public void setMyVar(int myVar) {
        this.myVar = myVar;
    }

    @Override
    public String toString() {
        return "Parent{" +
                "myVar=" + myVar +
                '}';
    }
}
